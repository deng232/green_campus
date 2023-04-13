import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { NextResponse } from 'next/server';
import DATAToLayer from '@/util/DATAToLayer';
export async function GET(request: Request) {
    try {
        // Your API logic here
        const data = await prisma.dATA.findMany({
          orderBy: { TIMESTAMP: "desc" },
          take: 1,
        });

        return NextResponse.json(DATAToLayer(data))
      } catch (error) {
        return NextResponse.error()
      }

}

