import { Map } from "maplibre-gl";
import { MapItem } from "../../types";
import { touchedMapItems } from "./mountMapImages";

type Props = {
  map: Map;
  mapItems: MapItem[];
};

export default async function updateMapImages({ map, mapItems }: Props) {
  const visibleIds = new Set(mapItems.map(({ id }) => id));
  mapItems.forEach((mapItem) => {
    touchedMapItems[mapItem.id] = mapItem;
  });
  Object.values(touchedMapItems).forEach((mapItem) => {
    const isVisible = visibleIds.has(mapItem.id);
    const layerId = `layer-${mapItem.id}`;
    if (map.getLayer(layerId)) {
      map.setLayoutProperty(
        layerId,
        "visibility",
        isVisible ? "visible" : "none"
      );
    } else {
      const sourceId = `source-${mapItem.id}`;
      map.addSource(sourceId, {
        type: "image",
        url: mapItem.url,
        coordinates: mapItem.bounds,
      });
      map.addLayer(
        {
          type: "raster",
          id: `layer-${mapItem.id}`,
          source: sourceId,
        },
        "bounds-fills"
      );
    }
  });
}
