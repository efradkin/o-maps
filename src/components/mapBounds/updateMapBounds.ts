import { GeoJSONSource, LngLat, Map } from "maplibre-gl";
import { MapItem } from "../../types";
import { featureCollection, polygon } from "@turf/turf";

type Props = {
  map: Map;
  mapItems: MapItem[];
};

export default function updateMapBounds({ map, mapItems }: Props) {
  map
    .getSource<GeoJSONSource>("bounds")!
    .setData(
      featureCollection(
        mapItems.map((d) => polygon([[...d.bounds, d.bounds[0]]], { id: d.id }))
      )
    );
}
