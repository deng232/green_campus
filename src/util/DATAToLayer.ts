import { Prisma, DATA } from "@prisma/client";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
export default function DATAToLayer(data: DATA[]): GraphicsLayer {
  const graphicsLayer = new GraphicsLayer();
  data.forEach((feature) => {
    // Create a Graphic object for each feature
    const graphic = new Graphic({
      geometry: new Point({
        latitude: feature.LNG, // Assuming the 'LNG' property represents the X coordinate
        longitude: feature.LAT, // Assuming the 'LAT' property represents the Y coordinate
        spatialReference: { wkid: 4326 },
      }),
      attributes: {
        ID: feature.ID,
        NAME: feature.NAME,
        NODE: feature.NODE,
        DISTANCE: feature.DISTANCE,
        BATTERY: feature.BATTERY,
        TIMESTAMP: feature.TIMESTAMP,
      },
    });

    // Add the Graphic object to the GraphicsLayer
    graphicsLayer.add(graphic);
  });
  return graphicsLayer
}
