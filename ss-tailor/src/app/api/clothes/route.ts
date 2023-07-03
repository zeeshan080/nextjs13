import { NextResponse } from "next/server";
import { db } from "@/db/index";
import { newClothes, ClothesTable } from "@/db/schema";

const handler = async (request: Request) => {
  const { method } = request;
  if (method === "POST") {
    const clothesData: newClothes = await request.json();
    console.log(clothesData)
    const postDataInTable = await db.insert(ClothesTable).values(clothesData);
    return NextResponse.json({ message: postDataInTable.count, data: postDataInTable });
  }
  const clothesData = (await db.select().from(ClothesTable)).length;
  return NextResponse.json({ data: clothesData });
};

export { handler as GET, handler as POST };
