import { PrismaClient ,DATA} from '@prisma/client'
const prisma = new PrismaClient()
import { NextResponse } from 'next/server';
import DATATogeoJSON from '@/util/DATATogeoJSON';
export async function GET(request: Request) {
    try {
        // Your API logic here
        const data:DATA[] = await prisma.dATA.findMany({
          orderBy: { TIMESTAMP: "desc" },
          take: 1,
        });

        return new NextResponse(JSON.stringify(DATATogeoJSON(data)))
      } catch (error) {
        return NextResponse.error()
      }

}

