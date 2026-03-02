import { Map } from "maplibre-gl";

export function setHovered(
  map: Map,
  featureId: number | null,
  hovered: boolean
) {
  if (featureId) {
    map.setFeatureState({ source: "bounds", id: featureId }, { hovered });
  }
}
