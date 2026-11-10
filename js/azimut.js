/* Каталог и поиск по журналу «Азимут». */
(() => {
    'use strict';

    const script = document.currentScript;
    const DATA_DIR = (script && script.dataset.dataDir) || 'azimut/';

    const input = document.getElementById('azimutSearchInput');
    const searchButton = document.getElementById('azimutSearchBtn');
    const fulltextCheckbox = document.getElementById('azimutFulltext');
    const status = document.getElementById('azimutSearchStatus');
    const resultsPanel = document.getElementById('azimutResults');
    const resultsCount = document.getElementById('azimutResultsCount');
    const resultsList = document.getElementById('azimutResultsList');
    const issuesGrid = document.getElementById('azimutIssues');
    const issuesCount = document.getElementById('azimutIssuesCount');

    let indexData = null;
    let issues = [];
    // Публичные идентификаторы выпусков для URL. Технические issue.id остаются
    // только внутренними ключами данных и никогда не формируют ссылки интерфейса.
    let publicIssueIds = new Map();
    let issuesByPublicId = new Map();
    let fulltextFiles = [];
    let fulltextCache = new Map();
    let fulltextLoadPromise = null;
    let debounceTimer = null;
    let searchSequence = 0;

    function normalize(value) {
        return String(value || '')
            .toLocaleLowerCase('ru')
            .replace(/ё/g, 'е')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function normalizeForSnippet(value) {
        return String(value || '')
            .toLocaleLowerCase('ru')
            .replace(/ё/g, 'е')
            .replace(/\s/g, ' ');
    }

    function parseQuery(value) {
        const terms = [];
        const re = /"([^"]+)"|(\S+)/g;
        let match;
        while ((match = re.exec(value)) !== null) {
            const phrase = Boolean(match[1]);
            const term = normalize(match[1] || match[2]);
            if (term) terms.push({ value: term, phrase });
        }
        return terms;
    }

    function matchesQuery(value, terms) {
        const hay = normalize(value);
        return terms.every(term => hay.includes(term.value));
    }

    function issueKey(issue) {
        return String(issue.id || [
            issue.year || '',
            issue.number || '',
            issue.source_url || issue.url || ''
        ].join('|'));
    }

    function issuePublicBaseId(issue) {
        const year = String(issue.year ?? 'unknown').trim() || 'unknown';
        const number = String(issue.number ?? 'unknown').trim() || 'unknown';
        return `${year}-${number}`;
    }

    function buildPublicIssueIds(list) {
        publicIssueIds = new Map();
        issuesByPublicId = new Map();

        const groups = new Map();
        list.forEach(issue => {
            const base = issuePublicBaseId(issue);
            if (!groups.has(base)) groups.set(base, []);
            groups.get(base).push(issue);
        });

        groups.forEach((group, base) => {
            // Сортировка по публичным данным делает порядковые суффиксы
            // устойчивыми при изменении порядка записей в JSON.
            const ordered = group.slice().sort((a, b) => {
                const aKey = [
                    a.source_url || a.url || a.local_url || a.local_file || '',
                    a.title || '',
                    a.id || ''
                ].join('|');
                const bKey = [
                    b.source_url || b.url || b.local_url || b.local_file || '',
                    b.title || '',
                    b.id || ''
                ].join('|');
                return aKey.localeCompare(bKey, 'ru');
            });

            ordered.forEach((issue, index) => {
                const publicId = group.length > 1
                    ? `${base}-${index + 1}`
                    : base;
                const internalKey = issueKey(issue);
                publicIssueIds.set(internalKey, publicId);
                issuesByPublicId.set(publicId, issue);
            });
        });
    }

    function publicIssueId(issue) {
        return publicIssueIds.get(issueKey(issue)) || issuePublicBaseId(issue);
    }

    function issueLabel(issue) {
        const number = issue.number !== undefined && issue.number !== null
            ? `№ ${issue.number}` : '';
        return `Журнал «Азимут» ${number}`.trim();
    }

    function issueCardLabel(issue) {
        const year = issue.year || 'Год неизвестен';
        let number = String(issue.number ?? '').trim();
        const title = String(issue.title || '');
        const special = /спец(?:иальн)?выпуск/i.test(title) || number.toLowerCase() === 'special';
        if (!number || number.toLowerCase() === 'unknown') number = 'номер не определён';
        else if (number.toLowerCase() === 'special') number = 'спецвыпуск';
        return `${year}, №${number}${special && number !== 'спецвыпуск' ? ' (спец)' : ''}`;
    }

    function issueDetailLabel(issue) {
        return issueCardLabel(issue);
    }

    function plausibleArticleTitle(value) {
        const title = String(value || '').replace(/\s+/g, ' ').trim();
        if (!title || title.length > 110) return false;
        const words = title.split(/\s+/).filter(Boolean);
        if (words.length > 16) return false;
        if (/\.{4,}/.test(title) || /\d{5,}/.test(title)) return false;
        return true;
    }

    function dataUrl(path) {
        if (!path) return '';
        if (/^(https?:)?\/\//i.test(path) || path.startsWith('/')) return path;
        return encodeURI(DATA_DIR + String(path).replace(/^\.?\//, ''));
    }

    function safePdfUrl(url, issue, pageNumber) {
        let candidate = url || issue.source_url || issue.url || '';
        if (!candidate) return '#';
        if (pageNumber && !/#page=\d+/.test(candidate)) {
            candidate += `#page=${pageNumber}`;
        }
        return candidate;
    }

    function setStatus(message, isError = false) {
        status.textContent = message || '';
        status.classList.toggle('text-danger', Boolean(isError));
    }

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined && text !== null) node.textContent = String(text);
        return node;
    }

    function makeExternalLink(url, title) {
        const a = el('a', '', title);
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        return a;
    }

    function sortIssues(list) {
        return list.slice().sort((a, b) => {
            const yearDiff = Number(b.year || 0) - Number(a.year || 0);
            if (yearDiff) return yearDiff;
            const an = Number(a.number);
            const bn = Number(b.number);
            if (Number.isFinite(an) && Number.isFinite(bn)) return bn - an;
            return String(a.number || '').localeCompare(String(b.number || ''), 'ru');
        });
    }

    function renderIssueDetail(issue) {
        const detail = document.getElementById('azimutIssueDetail');
        const title = document.getElementById('azimutIssueDetailTitle');
        const cover = document.getElementById('azimutIssueCover');
        const openPdf = document.getElementById('azimutIssueOpenPdf');
        const summary = document.getElementById('azimutIssueSummary');
        const articlesContainer = document.getElementById('azimutIssueArticles');
        const backLink = document.getElementById('azimutIssueBack');
        const closeLink = document.getElementById('azimutIssueClose');

        [
            'azimutSearchControls', 'azimutSearchHint', 'azimutSearchStatus',
            'azimutResults', 'azimutCatalogSection', 'azimutSource'
        ].forEach(id => {
            const node = document.getElementById(id);
            if (node) node.hidden = true;
        });

        detail.hidden = false;
        document.body.classList.add('azimut-issue-page');
        backLink.href = 'azimut.html';
        closeLink.href = 'azimut.html';
        backLink.target = '_self';
        closeLink.target = '_self';

        // Если пользователь пришёл из каталога, возвращаем его именно туда,
        // сохраняя состояние поиска/прокрутки браузером, если это возможно.
        let canReturnToCatalog = false;
        try {
            const referrer = new URL(document.referrer);
            canReturnToCatalog = referrer.origin === window.location.origin
                && referrer.pathname === window.location.pathname
                && !referrer.searchParams.has('issue');
        } catch (_) {
            // При прямом открытии ссылки используем обычный переход на azimut.html.
        }
        if (canReturnToCatalog) {
            [backLink, closeLink].forEach(link => {
                link.addEventListener('click', event => {
                    event.preventDefault();
                    window.history.back();
                }, { once: true });
            });
        }

        // Esc выполняет то же действие, что и крестик закрытия выпуска.
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeLink.click();
            }
        }, { once: true });

        if (!issue) {
            title.textContent = 'Выпуск не найден';
            cover.replaceChildren(el('span', '', '📖'));
            cover.firstChild.style.fontSize = '4rem';
            openPdf.hidden = true;
            summary.textContent = 'Не удалось найти выпуск с указанным идентификатором.';
            articlesContainer.replaceChildren();
            document.title = 'Выпуск не найден — журнал «Азимут» — O-Maps';
            return;
        }

        const label = issueDetailLabel(issue);
        title.textContent = label;
        document.title = `${label} — журнал «Азимут» — O-Maps`;

        cover.replaceChildren();
        if (issue.cover_image) {
            const image = el('img');
            image.src = dataUrl(issue.cover_image);
            image.alt = `Обложка журнала «Азимут», ${label}`;
            image.loading = 'eager';
            image.onerror = () => {
                const fallback = el('span', '', '📖');
                fallback.style.fontSize = '4rem';
                cover.replaceChildren(fallback);
            };
            cover.appendChild(image);
        } else {
            const fallback = el('span', '', '📖');
            fallback.style.fontSize = '4rem';
            cover.appendChild(fallback);
        }

        const pdfUrl = issue.local_url || issue.source_url || issue.url || '';
        if (pdfUrl) {
            openPdf.href = pdfUrl;
            openPdf.hidden = false;
        } else {
            openPdf.hidden = true;
        }

        const articles = Array.isArray(issue.articles) ? issue.articles
            .map((article, index) => ({ article, index }))
            .filter(item => String(item.article.title || '').trim())
            .sort((a, b) => {
                const ap = Number(a.article.page || a.article.pdf_page || 0);
                const bp = Number(b.article.page || b.article.pdf_page || 0);
                return (ap - bp) || (a.index - b.index);
            }) : [];

        const details = [];
        if (issue.year) details.push(String(issue.year));
        if (issue.page_count) details.push(`${issue.page_count} стр.`);
        if (articles.length) details.push(`${articles.length} стат.`);
        summary.textContent = details.join(' · ');

        articlesContainer.replaceChildren();
        if (!articles.length) {
            articlesContainer.appendChild(el('p', 'azimut-issue-detail__empty',
                'Содержание этого выпуска пока не распознано.'));
        } else {
            const list = el('ol', 'azimut-issue-detail__articles');
            articles.forEach(({ article }) => {
                const item = el('li');
                const printedPage = article.page || article.pdf_page || '';
                const pdfPage = article.pdf_page || article.page || '';
                const articleTitle = String(article.title).replace(/\s+/g, ' ').trim();
                const url = safePdfUrl(article.url, issue, pdfPage);
                const link = makeExternalLink(url, articleTitle);
                if (!url || url === '#') {
                    link.addEventListener('click', event => event.preventDefault());
                }
                item.appendChild(link);
                if (printedPage !== '') {
                    item.appendChild(el('span', 'azimut-issue-detail__page', printedPage));
                }
                list.appendChild(item);
            });
            articlesContainer.appendChild(list);
        }
    }

    function renderIssueCards(hitCounts = null, queryActive = false) {
        issuesGrid.replaceChildren();
        const sorted = sortIssues(issues);
        let visible = 0;

        sorted.forEach(issue => {
            const key = issueKey(issue);
            const count = hitCounts ? (hitCounts.get(key) || 0) : 0;
            if (queryActive && count === 0) return;

            const column = el('div', 'col-6 col-sm-4 col-md-3 col-lg-2');
            const card = el('div', 'region-box p-2');
            const link = el('a');
            link.href = `azimut.html?issue=${encodeURIComponent(publicIssueId(issue))}`;
            link.target = '_self';
            link.title = `Открыть содержание выпуска ${issueCardLabel(issue)}`;

            if (issue.cover_image) {
                const image = el('img');
                image.src = dataUrl(issue.cover_image);
                image.alt = `Обложка: ${issueLabel(issue)}, ${issue.year || ''}`;
                image.loading = 'lazy';
                // Обложки — содержимое журнала, в тёмной теме их цвета не инвертируем.
                image.style.filter = 'none';
                image.style.opacity = '1';
                image.onerror = () => {
                    const fallback = el('span', '', '📖');
                    fallback.style.fontSize = '2.5rem';
                    image.replaceWith(fallback);
                };
                link.appendChild(image);
            } else {
                const fallback = el('span', '', '📖');
                fallback.style.fontSize = '2.5rem';
                link.appendChild(fallback);
            }

            link.appendChild(el('h5', '', issueCardLabel(issue)));

            // На карточках каталога не показываем количество страниц и статей.
            // При поиске оставляем число найденных совпадений.
            if (queryActive && count > 0) {
                link.appendChild(el('small', '', `${count} ${count === 1 ? 'совпадение' : 'совпадений'}`));
            }

            card.appendChild(link);
            column.appendChild(card);
            issuesGrid.appendChild(column);
            visible++;
        });

        issuesCount.textContent = queryActive
            ? `Подходящих выпусков: ${visible} из ${issues.length}`
            : `Всего выпусков: ${issues.length}`;
    }

    function appendSnippet(parent, text, terms) {
        const raw = String(text || '').replace(/\s+/g, ' ').trim();
        if (!raw) return;

        const hay = normalizeForSnippet(raw);
        let pos = -1;
        for (const term of terms) {
            pos = hay.indexOf(term.value);
            if (pos >= 0) break;
        }

        const maxLength = 165;
        let start = pos >= 0 ? Math.max(0, pos - 55) : 0;
        if (start + maxLength > raw.length) start = Math.max(0, raw.length - maxLength);
        const end = Math.min(raw.length, start + maxLength);

        let snippet = raw.slice(start, end).trim();
        if (start > 0) snippet = '…' + snippet;
        if (end < raw.length) snippet += '…';

        const node = el('p', 'small text-muted mt-1 mb-0', snippet);
        node.style.display = '-webkit-box';
        node.style.webkitBoxOrient = 'vertical';
        node.style.webkitLineClamp = '2';
        node.style.overflow = 'hidden';
        node.style.overflowWrap = 'anywhere';
        parent.appendChild(node);
    }

    function renderResults(results, total, terms, hitCounts, queryActive) {
        resultsPanel.hidden = !queryActive;
        resultsList.replaceChildren();
        if (!queryActive) {
            resultsCount.textContent = '';
            return;
        }

        resultsCount.textContent = `Найдено: ${total}`;
        if (!total) {
            resultsList.appendChild(el('p', 'mb-0', 'Совпадений не найдено.'));
            return;
        }

        const limit = 100;
        results.slice(0, limit).forEach((result, index) => {
            const item = el('div', index < Math.min(results.length, limit) - 1
                ? 'mb-3 pb-2 border-bottom' : 'mb-1');
            const a = makeExternalLink(result.url || '#', result.title || 'Открыть страницу журнала');
            if (!result.url) a.addEventListener('click', e => e.preventDefault());
            item.appendChild(a);

            if (result.meta) {
                item.appendChild(el('small', 'd-block text-muted', result.meta));
            }
            if (result.snippet) appendSnippet(item, result.snippet, terms);
            resultsList.appendChild(item);
        });

        if (total > limit) {
            resultsList.appendChild(el('p', 'small text-muted mt-2 mb-0',
                `Показаны первые ${limit} результатов из ${total}. Уточните запрос, чтобы сузить выдачу.`));
        }
    }

    function buildCatalogResults(terms) {
        const results = [];
        const hitCounts = new Map();

        issues.forEach(issue => {
            const key = issueKey(issue);
            const metadata = [
                issue.title, issue.year, issue.number, 'азимут', 'журнал'
            ].join(' ');
            const metadataMatch = matchesQuery(metadata, terms);
            const articles = Array.isArray(issue.articles) ? issue.articles : [];
            let issueHits = 0;

            articles.forEach(article => {
                if (!matchesQuery(article.title, terms)) return;
                const page = article.pdf_page || article.page || 1;
                const url = safePdfUrl(article.url, issue, page);
                results.push({
                    issueKey: key,
                    title: plausibleArticleTitle(article.title)
                        ? article.title : `Страница ${article.page || page}`,
                    url,
                    meta: `${issueLabel(issue)} · ${issue.year || ''} · стр. ${article.page || page}`,
                    snippet: ''
                });
                issueHits++;
            });

            if (issueHits === 0 && metadataMatch) {
                results.push({
                    issueKey: key,
                    title: issueLabel(issue),
                    url: safePdfUrl(issue.source_url || issue.url, issue, 1),
                    meta: `${issue.year || ''} год · выпуск целиком`,
                    snippet: ''
                });
                issueHits++;
            }

            if (issueHits) hitCounts.set(key, issueHits);
        });

        return { results, hitCounts };
    }

    async function loadFulltextIndexes() {
        if (fulltextLoadPromise) return fulltextLoadPromise;

        fulltextLoadPromise = (async () => {
            const missing = fulltextFiles.filter(item => !fulltextCache.has(item.file));
            if (!missing.length) return;

            let completed = fulltextFiles.length - missing.length;
            const concurrency = 3;

            for (let i = 0; i < missing.length; i += concurrency) {
                const batch = missing.slice(i, i + concurrency);
                await Promise.all(batch.map(async item => {
                    try {
                        const response = await fetch(dataUrl(item.file));
                        if (!response.ok) throw new Error(`HTTP ${response.status}`);
                        const data = await response.json();
                        fulltextCache.set(item.file, data);
                    } catch (error) {
                        fulltextCache.set(item.file, { __error: String(error) });
                    } finally {
                        completed++;
                        setStatus(`Загружаю полнотекстовый индекс: ${completed} из ${fulltextFiles.length} файлов…`);
                    }
                }));
            }
        })();

        try {
            await fulltextLoadPromise;
        } finally {
            fulltextLoadPromise = null;
        }
    }

    function buildFulltextResults(terms) {
        const results = [];
        const hitCounts = new Map();
        const failedFiles = [];

        fulltextFiles.forEach(file => {
            const data = fulltextCache.get(file.file);
            if (!data) return;
            if (data.__error) {
                failedFiles.push(`${file.year}: ${data.__error}`);
                return;
            }

            (data.issues || []).forEach(issue => {
                const key = issueKey(issue);
                (issue.pages || []).forEach(page => {
                    if (!matchesQuery(page.text, terms)) return;
                    const article = (issue.articles || []).find(a =>
                        Number(a.pdf_page) === Number(page.pdf_page)
                    );
                    const pageNumber = page.pdf_page || page.page || 1;
                    results.push({
                        issueKey: key,
                        title: article && plausibleArticleTitle(article.title)
                            ? article.title : `Страница ${page.page || pageNumber}`,
                        url: safePdfUrl(page.url || issue.source_url || issue.url, issue, pageNumber),
                        meta: `${issueLabel(issue)} · ${issue.year || file.year} · стр. ${page.page || pageNumber}`,
                        snippet: page.text || ''
                    });
                    hitCounts.set(key, (hitCounts.get(key) || 0) + 1);
                });
            });
        });

        return { results, hitCounts, failedFiles };
    }

    async function runSearch() {
        const sequence = ++searchSequence;
        const query = input.value.trim();
        const terms = parseQuery(query);
        if (!query || !terms.length) {
            renderResults([], 0, [], null, false);
            renderIssueCards(null, false);
            setStatus('');
            return;
        }

        if (!fulltextCheckbox.checked) {
            const found = buildCatalogResults(terms);
            renderResults(found.results, found.results.length, terms, found.hitCounts, true);
            renderIssueCards(found.hitCounts, true);
            setStatus('Поиск по названиям статей и данным выпусков. Для поиска по содержимому включите полнотекстовый режим.');
            return;
        }

        if (!fulltextFiles.length) {
            renderResults([], 0, terms, null, true);
            renderIssueCards(new Map(), true);
            setStatus('Для этих выпусков полнотекстовые индексы не указаны.', true);
            return;
        }

        setStatus('Подготавливаю полнотекстовый поиск…');
        await loadFulltextIndexes();
        if (sequence !== searchSequence) return;

        const found = buildFulltextResults(terms);
        renderResults(found.results, found.results.length, terms, found.hitCounts, true);
        renderIssueCards(found.hitCounts, true);

        if (found.failedFiles.length) {
            setStatus(`Загружены не все годовые индексы. Ошибки: ${found.failedFiles.join('; ')}`, true);
        } else {
            setStatus('Полнотекстовый поиск по загруженным страницам. Файлы остаются в кэше до закрытия страницы.');
        }
    }

    function scheduleSearch(immediate = false) {
        clearTimeout(debounceTimer);
        if (immediate) {
            runSearch();
        } else {
            debounceTimer = setTimeout(runSearch, 250);
        }
    }

    function renderInitialError(message) {
        setStatus(message, true);
        issuesGrid.replaceChildren();
        issuesCount.textContent = '';
    }

    async function init() {
        try {
            const response = await fetch(dataUrl('azimut-index.json'));
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            indexData = await response.json();
            issues = Array.isArray(indexData.issues) ? indexData.issues : [];
            buildPublicIssueIds(issues);
            fulltextFiles = Array.isArray(indexData.fulltext_files)
                ? indexData.fulltext_files
                : [];

            if (!fulltextFiles.length) {
                const byFile = new Map();
                issues.forEach(issue => {
                    if (issue.fulltext_file && issue.year) {
                        byFile.set(issue.fulltext_file, {
                            year: issue.year,
                            file: issue.fulltext_file
                        });
                    }
                });
                fulltextFiles = Array.from(byFile.values());
            }

            const requestedIssueId = new URLSearchParams(window.location.search).get('issue');
            if (requestedIssueId !== null) {
                // Сначала используем публичный ID. Старые ссылки с техническим
                // ID временно поддерживаются для совместимости, но больше не генерируются.
                const selectedIssue = issuesByPublicId.get(requestedIssueId)
                    || issues.find(issue => issueKey(issue) === requestedIssueId);
                renderIssueDetail(selectedIssue || null);
                return;
            }

            renderIssueCards(null, false);
            if (!issues.length) {
                setStatus('В кратком индексе нет выпусков.', true);
            } else {
                setStatus('');
            }

            input.addEventListener('input', () => scheduleSearch());
            input.addEventListener('keydown', event => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    scheduleSearch(true);
                } else if (event.key === 'Escape') {
                    input.value = '';
                    scheduleSearch(true);
                }
            });
            searchButton.addEventListener('click', () => {
                input.focus();
                scheduleSearch(true);
            });
            fulltextCheckbox.addEventListener('change', () => scheduleSearch(true));

            // Как и на остальных страницах с поиском, клавиша «/» переводит фокус в строку.
            document.addEventListener('keydown', event => {
                if (event.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
                    event.preventDefault();
                    input.focus();
                }
            });
        } catch (error) {
            renderInitialError(`Не удалось загрузить краткий индекс журнала «Азимут»: ${error.message}. Проверьте расположение ${DATA_DIR}azimut-index.json.`);
        }
    }

    init();
})();
