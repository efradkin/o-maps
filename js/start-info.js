let m = getMapForName(MAP_NAME_PARAM);
let elName = document.getElementById('map_name');
if (elName) {
    elName.innerHTML = mapTitle(m);
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
document.querySelector('#map_preview img').src = m.url;
if (m.link) {
    document.querySelector('#download_links').innerHTML = buildDownloadLinks(m.link);
    document.querySelector('#map_preview').href = Array.isArray(m.link) ? m.link[0] : m.link;
}
putValue('#map_gps', buildGpsLinks(m));
putValue('#map_author', buildAuthors(m));
putValue('#map_owner', buildOwners(m));
let logo = mapLogo(m);
if (logo) {
    document.querySelector('#map_logo img').src = './logo/' + logo;
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
