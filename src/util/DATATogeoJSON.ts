import { Prisma, DATA } from "@prisma/client";

export default function DATATogeoJSON(data: DATA[]) {
  const geoJSON = {
    type: "FeatureCollection",
    features: [] as Feature[] // Updated type to Feature[]
  }

  data.forEach((feature) => {
    // Create a Feature object for each data point
    geoJSON.features.push({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [feature.LNG, feature.LAT]
      },
      properties: {
        ID: feature.ID,
        NAME: feature.NAME,
        NODE: feature.NODE,
        DISTANCE: feature.DISTANCE,
        BATTERY: feature.BATTERY,
        TIMESTAMP: feature.TIMESTAMP.toISOString() // Convert to ISO 8601 formatted string
      }
    });
  });

  return geoJSON;
}

interface Feature {
  type: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  properties: {
    ID: number;
    NAME: string;
    NODE: string;
    DISTANCE: number;
    BATTERY: number;
    TIMESTAMP: string;
  };
}
