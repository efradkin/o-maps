let m = getMapForName(MAP_NAME_PARAM);
document.getElementById('map_title').href = mapLink(m.url, m.region);
let elName = document.getElementById('map_name');
if (elName) {
    elName.innerHTML = mapTitle(m, true);
}
if (m.start && starts[m.start]) {
    document.getElementById('map_start').innerHTML = starts[m.start].name;
}
if (m.info) {
    let el = document.getElementById('map_info');
    if (el) {
        el.innerHTML = m.info;
    }
}

let MAP_TEMPLATE = '<a href="#preview_href" target="_blank" title="Скачать карту" class="map_preview" target="_blank"><img src="#img_src" /></a><br /><br />';
let previews = '';
if (m.link) {
    document.querySelector('#download_links').innerHTML = buildDownloadLinks(m.link);

    let links = Array.isArray(m.link) ? m.link : [m.link];
    for (const l of links) {
        if (!l.endsWith('pdf')) {
            previews += MAP_TEMPLATE.replace('#preview_href', l).replace('#img_src', l);
        }
    }
}
if (!previews) {
    previews = MAP_TEMPLATE.replace('#img_src', m.url).replace('#preview_href', '#');
}
document.querySelector('#preview_maps').innerHTML = previews;

putValue('#map_gps', buildGpsLinks(m));
putValue('#map_author', buildAuthors(m));
putValue('#map_owner', buildOwners(m));
let logo = mapLogoList(m);
if (logo) {
    document.querySelector('#map_logo img').src = './logo/' + logo[0];
} else {
    document.querySelector('#map_logo .col-md-3').classList.remove('col-md-3');
    document.querySelector('#map_logo .col-md-9').classList.remove('col-md-9');
}
let typesList = getTypesList(m);
if (typesList) {
    document.getElementById('types_list').innerHTML = typesList;
}

function putValue(el, value) {
    if (value) {
        let span = document.querySelector(el + ' span');
        if (span) {
            span.innerHTML = value;
            document.querySelector(el).style.display = 'inline-block';
        }
    }
}
