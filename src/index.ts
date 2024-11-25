import "./index.css";
import "maplibre-gl/dist/maplibre-gl.css";
import { LngLat } from "maplibre-gl";
import createMapItems from "./createMapItems";
import mountMapImages from "./components/mapImages/mountMapImages";
import { hideLoadingBar } from "./components/loadingBar";
import mountMapBounds from "./components/mapBounds/mountMapBounds";
import { showMapInfoPopup } from "./components/mapInfoPopup";
import getMapDefinitions from "./api/getMapDefinitions";
import { Filter } from "./types";
import navigate from "./components/router";
import mountSidebar from "./components/sidebar/mountSidebar";
import updateMapImages from "./components/mapImages/updateMapImages";
import updateMapBounds from "./components/mapBounds/updateMapBounds";
import { setHovered } from "./components/mapBounds/featureState";
import getInitialAppState from "./getInitialAppState";

const mapDefinitions = await getMapDefinitions();
const allMapItems = createMapItems(mapDefinitions);
const state = getInitialAppState(allMapItems);

function handleMapMouseMove(id: number) {
  setHovered(map, state.hoveredFeatureId, false);
  state.hoveredFeatureId = id;
  setHovered(map, state.hoveredFeatureId, true);
  map.getCanvas().style.cursor = "pointer";
}

function handleMapMouseLeave() {
  setHovered(map, state.hoveredFeatureId, false);
  state.hoveredFeatureId = null;
  map.getCanvas().style.cursor = "default";
}

function handleMapClick(featureId: number, mapId: string, lngLat: LngLat) {
  const mapItem = state.mapItems.find(({ id }) => id === mapId)!;
  showMapInfoPopup({
    map,
    lngLat,
    mapItem,
    onOpen: () => navigate(`?map=${mapId}`),
    onClose: () => navigate("/"),
  });
}

function handleFilterChange(filter: Filter) {
  state.filter = filter;
  state.mapItems = allMapItems.filter(({ types }) =>
    types.includes(filter.mapType)
  );
  updateMapImages({ map, mapItems: state.mapItems });
  updateMapBounds({ map, mapItems: state.mapItems });
  localStorage.setItem("filter", JSON.stringify(filter));
}

const map = await mountMapImages({
  mapItems: state.mapItems,
  center: state.center,
  zoom: state.zoom,
});

map.on("moveend", () => {
  localStorage.setItem("center", JSON.stringify(map.getCenter()));
  localStorage.setItem("zoom", map.getZoom().toString());
});

map.on("moveend", () => {
  localStorage.setItem("center", JSON.stringify(map.getCenter()));
  localStorage.setItem("zoom", map.getZoom().toString());
});

mountMapBounds({
  map,
  mapItems: state.mapItems,
  onClick: handleMapClick,
  onMouseMove: handleMapMouseMove,
  onMouseLeave: handleMapMouseLeave,
});

mountSidebar({ filter: state.filter, onChangeFilter: handleFilterChange });

hideLoadingBar();
