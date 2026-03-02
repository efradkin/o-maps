import { midpoint } from "@turf/turf";
import { AppState, Filter, MapItem } from "./types";

export default function getInitialAppState(allMapItems: MapItem[]): AppState {
  const selectedMapId = new URLSearchParams(location.search).get("map");

  let center = { lng: 30.5, lat: 60 };
  let zoom = 10;
  let filter: Filter = { mapType: "ORIENT" };

  if (selectedMapId) {
    const mapItem = allMapItems.find(({ id }) => id === selectedMapId)!;
    const [p1, _, p2] = mapItem.bounds;
    const [lng, lat] = midpoint(p1, p2).geometry.coordinates;
    center = { lat, lng };
    zoom = 14;
    filter.mapType = mapItem.types[0] as any;
  } else {
    const centerValue = localStorage.getItem("center");
    const zoomValue = localStorage.getItem("zoom");
    const filterValue = localStorage.getItem("filter");
    if (centerValue) center = JSON.parse(centerValue);
    if (zoomValue) zoom = JSON.parse(zoomValue);
    if (filterValue) filter = JSON.parse(filterValue);
  }

  return {
    center,
    zoom,
    filter,
    mapItems: allMapItems.filter(({ types }) => types.includes(filter.mapType)),
    hoveredFeatureId: null,
  };
}
