import {
  LayerSpecification,
  LngLatLike,
  Map,
  StyleSpecification,
} from "maplibre-gl";
import { MapItem } from "../../types";

type Props = {
  center: LngLatLike;
  zoom: number;
  mapItems: MapItem[];
};

export const touchedMapItems: { [id: string]: MapItem } = {};

export default async function mountMapImages({
  mapItems,
  center,
  zoom,
}: Props): Promise<Map> {
  const imageSources: StyleSpecification["sources"] = {};
  const imageLayers: LayerSpecification[] = [];

  mapItems.forEach((item) => {
    const sourceId = `source-${item.id}`;
    imageSources[sourceId] = {
      type: "image",
      url: item.url,
      coordinates: item.bounds,
    };
    imageLayers.push({
      type: "raster",
      id: `layer-${item.id}`,
      source: sourceId,
    });
    touchedMapItems[item.id] = item;
  });

  const map = new Map({
    container: "map",
    center,
    zoom,
    style: {
      version: 8,
      sources: {
        ...imageSources,
        osm: {
          type: "raster",
          tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
          tileSize: 256,
        },
      },
      layers: [
        {
          id: "osm",
          type: "raster",
          source: "osm",
        },
      ],
    },
  });

  map.getCanvas().style.cursor = "default";

  await new Promise<void>((resolve) => {
    map.on("load", async () => {
      mapItems.forEach((item) => {
        const sourceId = `source-${item.id}`;
        map.addLayer({
          type: "raster",
          id: `layer-${item.id}`,
          source: sourceId,
        });
      });

      setTimeout(resolve, 0);
    });
  });

  return map;
}
