import { LngLat, Map } from "maplibre-gl";
import { MapItem } from "../../types";
import { featureCollection, polygon } from "@turf/turf";

type Props = {
  map: Map;
  mapItems: MapItem[];
  onClick: (featureId: number, mapId: string, lngLat: LngLat) => void;
  onMouseMove: (featureId: number) => void;
  onMouseLeave: () => void;
};

export default function mountMapBounds({
  map,
  mapItems,
  onClick,
  onMouseMove,
  onMouseLeave,
}: Props) {
  map.addSource("bounds", {
    type: "geojson",
    generateId: true,
    data: featureCollection(
      mapItems.map((d) => polygon([[...d.bounds, d.bounds[0]]], { id: d.id }))
    ),
  });

  map.addLayer({
    id: "bounds-fills",
    type: "fill",
    source: "bounds",
    paint: {
      "fill-color": "#fff",
      "fill-opacity": 0,
    },
  });

  map.addLayer({
    id: "bounds-strokes",
    type: "line",
    source: "bounds",
    paint: {
      "line-opacity": [
        "case",
        ["boolean", ["feature-state", "hovered"], false],
        1,
        0,
      ],
      "line-color": "#007FFF",
      "line-width": 3,
    },
  });

  map.on("click", "bounds-fills", (e) => {
    if (e.features && e.features.length > 0) {
      onClick(
        e.features[0].id as number,
        e.features[0].properties.id as string,
        e.lngLat
      );
    }
  });

  map.on("mousemove", "bounds-fills", (e) => {
    if (e.features && e.features.length > 0) {
      onMouseMove(e.features[0].id as number);
    }
  });

  map.on("mouseleave", "bounds-fills", () => {
    onMouseLeave();
  });
}
