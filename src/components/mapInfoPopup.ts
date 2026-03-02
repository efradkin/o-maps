import { LngLat, Map, Popup } from "maplibre-gl";
import { MapItem } from "../types";
import getMapOwners from "../api/getMapOwners";
import { area, polygon } from "@turf/turf";

type Props = {
  map: Map;
  mapItem: MapItem;
  lngLat: LngLat;
  onClose: () => void;
  onOpen: () => void;
};

export async function showMapInfoPopup({
  map,
  mapItem,
  lngLat,
  onClose,
  onOpen,
}: Props) {
  const owners = await getMapOwners();

  // имя
  let html = "<b>" + mapItem.name;
  if (mapItem.year) {
    html += "&nbsp;(" + mapItem.year + ")";
  }

  // площадь
  let areaKm = (
    area(polygon([[...mapItem.bounds, mapItem.bounds[0]]])) * 10e-7
  ).toFixed(2);

  html += "&nbsp;-&nbsp;" + areaKm + "&nbsp;км<sup>2</sup>";
  html += "</b><hr />";

  // инфа о карте
  let info = mapItem.info;
  let link = mapItem.link;
  if (info) {
    html += info + "<br />";
  }

  // владелец
  if (mapItem.owner) {
    if (Array.isArray(mapItem.owner)) {
      html += "Владельцы:<ol>";
      for (const o of mapItem.owner) {
        if (owners[o]) {
          html += "<li>" + owners[o] + "</li>";
        }
      }
      html += "</ol>";
    } else {
      if (owners[mapItem.owner]) {
        html += owners[mapItem.owner] + "<br />";
      }
    }
  }

  // ссылки на просмотр и скачивание
  if (link) {
    html += 'Скачать можно <a href="' + link + '" target="_blank">тут</a>.';
  } else {
    html +=
      'Посмотреть карту отдельно можно <a href="' +
      mapItem.url +
      '" target="_blank">тут</a>.';
  }

  const popup = new Popup();

  popup.on("close", onClose);
  popup.on("open", onOpen);

  popup.setLngLat(lngLat).setHTML(html).addTo(map);
}
