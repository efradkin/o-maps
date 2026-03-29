export type MapDefinition = {
  name: string;
  year?: number;
  url: string;
  info?: string;
  link?: string;
  bounds: [[number, number], [number, number], [number, number]];
  owner: string | string[];
  types: string[];
};

export type MapItem = {
  id: string;
  name: string;
  types: string[];
  url: string;
  owner: string | string[];
  year?: number;
  info?: string;
  link?: string;
  bounds: [
    [number, number],
    [number, number],
    [number, number],
    [number, number]
  ];
};

export type Filter = {
  mapType: "ORIENT" | "ROGAINE" | "SPECIAL";
};

export type AppState = {
  center: { lng: number; lat: number };
  zoom: number;
  filter: Filter;
  mapItems: MapItem[];
  hoveredFeatureId: number | null;
};
