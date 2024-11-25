import loadScript from "./loadScript";

declare global {
  const owners: { [key: string]: string };
}

export default async function getMapOwners(): Promise<{
  [key: string]: string;
}> {
  await loadScript("owners.js");
  return owners;
}
