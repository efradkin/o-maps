import { rhumbBearing, rhumbDestination, rhumbDistance } from "@turf/turf";
import { MapDefinition, MapItem } from "./types";

function getFullBounds(
  bounds: [[number, number], [number, number], [number, number]]
): [[number, number], [number, number], [number, number], [number, number]] {
  const [topLeft, topRight, bottomLeft] = bounds.map(
    ([a, b]): [number, number] => [b, a]
  );
  const bearing = rhumbBearing(topLeft, topRight);
  const distance = rhumbDistance(topLeft, topRight);
  const bottomRight = rhumbDestination(bottomLeft, distance, bearing).geometry
    .coordinates as [number, number];
  return [topLeft, topRight, bottomRight, bottomLeft];
}

function createId(url: string) {
  const match = url.match(/\/([^\/]+)\.[^\.]+$/);
  return match ? match[1] : "";
}

export default function createMapItems(
  mapDefinitions: MapDefinition[]
): MapItem[] {
  return mapDefinitions.map(
    ({ types, url, bounds, name, owner, year, info, link }) => {
      const id = createId(url);
      return {
        id,
        name,
        types,
        owner,
        year,
        info,
        link,
        url: url.replace(/^\./, ".."),
        bounds: getFullBounds(bounds),
      };
    }
  );
}
