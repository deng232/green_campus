import { PrismaClient, DATA } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse } from "next/server";
import toGEOJSON from "./toGeoJSON";

export async function GET(request: Request) {
  try {
    // there is error at 'max' The expected type comes from property 'max' which is declared here on type '{ by: "NODE"[]; max: never; } & { orderBy?: Enumerable<DATAOrderByWithAggregationInput> | undefined; }'
    const data:DATA[] = await prisma.dATA.findMany({
     distinct:['NODE'],
     orderBy:{
      TIMESTAMP:'desc'
     },
     take:1,
    });

    return NextResponse.json(toGEOJSON(data));
  } catch (error) {
    return NextResponse.error();
  }
}
// fix it


