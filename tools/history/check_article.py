"""Проверка статьи history/*.html в Playwright (сервер: python3 -m http.server 8765 в корне репозитория).

  python3 check_article.py [ARTICLE] [--orig ORIG] [--changed id,id…]

  ARTICLE     имя файла статьи в history/ (по умолчанию spb-history.html)
  --orig      предыдущая версия статьи в history/ (например __orig_check.html из git show) —
              с ней сравниваются тексты разделов, значки, указатель; без --orig сравнения нет
  --changed   id разделов, изменения в которых задуманы (не считаются непредвиденными)
На ширине 1600 и 390 px: JS-ошибки, битые якоря, якоря без target=_self, вложенные ссылки,
дубли id, все диаграммы (canvas) отрисованы, значки 📍, указатель имён, горизонтальная прокрутка.
"""
import asyncio, difflib, json, sys
ARGS = sys.argv[1:]
ARTICLE = next((a for a in ARGS if not a.startswith('--') and (ARGS.index(a) == 0 or not ARGS[ARGS.index(a) - 1].startswith('--'))), 'spb-history.html')
ORIG = ARGS[ARGS.index('--orig') + 1] if '--orig' in ARGS else None
from playwright.async_api import async_playwright
BASE = 'http://localhost:8765/history/'
CHANGED = set(ARGS[ARGS.index('--changed') + 1].split(',')) if '--changed' in ARGS else set()
STATE = '''() => {
  const ids = new Set([...document.querySelectorAll('[id]')].map(e=>e.id));
  const inMain = [...document.querySelectorAll('main a[href^="#"]')].filter(a => !a.closest('.leaflet-control'));
  const clean = n => { const m = n.cloneNode(true);
    m.querySelectorAll('a.hist-place-pin').forEach(a => { const t = a.previousSibling; if (t && t.nodeType === 3 && t.data.endsWith('\\u00a0')) t.data = t.data.slice(0, -1); });
    m.querySelectorAll('a.hist-place-pin, canvas, script').forEach(x=>x.remove());
    return m.textContent.replace(/\\u00a0/g,' ').replace(/\\s+/g,' ').trim(); };
  const secs = {}; document.querySelectorAll('main section[id]').forEach(s => secs[s.id] = clean(s));
  const toc = [...document.querySelectorAll('.hist-toc a')].map(a => a.getAttribute('href') + ' ' + a.textContent + ' | ' + (a.title||''));
  return {
    broken: [...new Set(inMain.map(a=>a.getAttribute('href').slice(1)).filter(h=>!ids.has(h)))],
    noSelf: inMain.filter(a=>a.getAttribute('target')!=='_self').map(a=>a.getAttribute('href')).slice(0,5),
    histNoSelf: [...document.querySelectorAll('main a[href]')].filter(a => /^(?!https?:)[^#]*\\.html/.test(a.getAttribute('href')) && !a.getAttribute('href').startsWith('../') && a.getAttribute('target')!=='_self').map(a=>a.getAttribute('href')),
    nested: document.querySelectorAll('a a').length,
    dup: [...document.querySelectorAll('[id]')].map(e=>e.id).filter((v,i,a)=>a.indexOf(v)!==i),
    secs, toc,
    pins: document.querySelectorAll('a.hist-place-pin').length,
    list: document.querySelectorAll('#places-list li').length,
    charts: [...document.querySelectorAll('canvas')].map(c => c.id + ':' + (window.Chart && Chart.getChart(c) ? 'ok' : 'нет')),
    persons: [...document.querySelectorAll('a[id^="nm"]')].length,
    wide: [...document.querySelectorAll('main *')].filter(e => { const r = e.getBoundingClientRect();
      return r.right > document.documentElement.clientWidth + 1 && !e.closest('[style*="overflow"], .hist-map, details:not([open]), .table') && r.width > 0; })
      .slice(0, 5).map(e => e.tagName + '.' + e.className + ' ' + (e.id || '')),
    scrollX: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    refs: [...document.querySelectorAll('.hist-names-refs a')].length,
    badRefs: [...document.querySelectorAll('.hist-names-refs a')].filter(a => !document.getElementById(a.getAttribute('href').slice(1))).length,
  };
}'''
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for w in (1600, 390):
            res = {}
            for name in ([ORIG] if ORIG else []) + [ARTICLE]:
                ctx = await b.new_context(viewport={'width': w, 'height': 900}); pg = await ctx.new_page(); errs = []; net = []
                pg.on('pageerror', lambda e: errs.append(str(e)))
                pg.on('console', lambda m: errs.append('console.' + m.type + ': ' + m.text) if m.type in ('error', 'warning') else None)
                pg.on('requestfailed', lambda r: net.append(r.url[:90]))
                await pg.goto(BASE + name, wait_until='networkidle')
                sels = await pg.evaluate("[...document.querySelectorAll('canvas[id], #places-map')].map(e => '#' + e.id)")
                for sel in sels:
                    await pg.evaluate(f"document.querySelector('{sel}').scrollIntoView({{block:'center'}})"); await pg.wait_for_timeout(1200)
                st = await pg.evaluate(STATE); st['errs'] = errs; st['net'] = sorted(set(net))[:6]
                res[name] = st; await ctx.close()
            n = res[ARTICLE]; o = res[ORIG] if ORIG else n
            print(f"=== {w}px  ошибки/предупреждения: {n['errs'] or 'нет'}; сеть: {n['net'] or 'ок'}")
            print(f"  битые якоря: {n['broken'] or 'нет'} | #якоря без _self: {n['noSelf'] or 'нет'} | history-ссылки без _self: {n['histNoSelf'] or 'нет'} | вложенные ссылки: {n['nested']} | дубли id: {n['dup'] or 'нет'}")
            print(f"  горизонтальная прокрутка: {n['scrollX']}px; элементы за правым краем: {n['wide'] or 'нет'}")
            print(f"  значков: {o['pins']}→{n['pins']} | мест в списке: {o['list']}→{n['list']} | диаграммы: {n['charts']} | упоминаний: {o['persons']}→{n['persons']} | цифр в указателе: {o['refs']}→{n['refs']}, битых {n['badRefs']}")
            if not ORIG:
                continue
            same = [k for k in o['secs'] if k not in CHANGED and o['secs'][k] == n['secs'].get(k)]
            diff = [k for k in o['secs'] if k not in CHANGED and o['secs'][k] != n['secs'].get(k)]
            print(f"  неизменных разделов: {len(same)}; изменились вне задуманных: {diff or 'нет'}; новые разделы: {[k for k in n['secs'] if k not in o['secs']]}")
            if w == 1600:
                print('  оглавление, изменения:', [l for l in difflib.unified_diff(o['toc'], n['toc'], lineterm='', n=0) if l[:1] in '+-' and l[:3] not in ('+++', '---')])
                json.dump({'o': o['secs'], 'n': n['secs']}, open('secs.json', 'w', encoding='utf-8'), ensure_ascii=False)
        await b.close()
asyncio.run(main())
