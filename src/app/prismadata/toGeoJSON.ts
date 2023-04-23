// complete this function using geojson which return type
/**
 *
 * The code defines a database model named DATA with the following fields:



ID: an integer field that serves as the primary key of the table and automatically increments for each new record.

NAME: a string field with a maximum length of 255 characters, stored in the database as a varchar.

NODE: a string field with a maximum length of 255 characters, stored in the database as a varchar.

DISTANCE: an integer field.

BATTERY: a floating-point field, stored in the database as a float.

LAT: a floating-point field representing the latitude of a location.

LNG: a floating-point field representing the longitude of a location.

TIMESTAMP: a datetime field with a default value set to the current time when a record is created, stored in the database as a timestamp with 0 fractional seconds.


 */
import { DATA } from "@prisma/client";
import { Feature, Point, GeoJSON } from "geojson";

export default function toGEOJSON(data: DATA[]): GeoJSON {
  const geoJSONFeatures = data.map((d) => {
    const { LAT, LNG, ...properties } = d;
    const point: Point = {
      type: "Point",
      coordinates: [LNG, LAT],
    };
    const feature: Feature<Point> = {
      type: "Feature",
      geometry: point,
      properties,
    };
    return feature;
  });
  return {
    type: "FeatureCollection",
    features: geoJSONFeatures,
  };
}
