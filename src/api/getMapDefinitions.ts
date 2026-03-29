import loadScript from "./loadScript";
import { MapDefinition } from "../types";

declare global {
  const cityMaps: MapDefinition[];
  const michuraMaps: MapDefinition[];
  const priozerskMaps: MapDefinition[];
  const sosnovoMaps: MapDefinition[];
  const southMaps: MapDefinition[];
  const toksovoMaps: MapDefinition[];
  const vaskelovoMaps: MapDefinition[];
  const vsevolozhskMaps: MapDefinition[];
  const vyborgMaps: MapDefinition[];
  const zelikMaps: MapDefinition[];
  const forestMaps: MapDefinition[];
  const parkMaps: MapDefinition[];
  const reliefMaps: MapDefinition[];
  const rogaineBeketovMaps: MapDefinition[];
  const rogaineKkmMaps: MapDefinition[];
  const rogaineMaps: MapDefinition[];
  const specialMaps: MapDefinition[];
  const veloMaps: MapDefinition[];
  const winterMaps: MapDefinition[];
}

const MAP_DEFINITION_FILES = [
  "maps-city.js",
  "maps-forest-michura.js",
  "maps-forest-priozersk.js",
  "maps-forest-sosnovo.js",
  "maps-forest-south.js",
  "maps-forest-toksovo.js",
  "maps-forest-vaskelovo.js",
  "maps-forest-vsevolozhsk.js",
  "maps-forest-vyborg.js",
  "maps-forest-zelik.js",
  "maps-forest.js",
  "maps-parks.js",
  "maps-relief.js",
  "maps-rogaine-beketov.js",
  "maps-rogaine-kkm.js",
  "maps-rogaine.js",
  "maps-special.js",
  "maps-velo.js",
  "maps-winter.js",
];

export default async function getMapDefinitions(): Promise<MapDefinition[]> {
  await Promise.all(MAP_DEFINITION_FILES.map(loadScript));

  return [
    ...cityMaps,
    ...michuraMaps,
    ...priozerskMaps,
    ...sosnovoMaps,
    ...southMaps,
    ...toksovoMaps,
    ...vaskelovoMaps,
    ...vsevolozhskMaps,
    ...vyborgMaps,
    ...zelikMaps,
    ...forestMaps,
    ...parkMaps,
    ...reliefMaps,
    ...rogaineBeketovMaps,
    ...rogaineKkmMaps,
    ...rogaineMaps,
    ...specialMaps,
    ...veloMaps,
    ...winterMaps,
  ];
}
