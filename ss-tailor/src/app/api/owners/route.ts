import { NextResponse } from "next/server";
import { db } from "@/db/index";
import { newOwner, OwnerTable } from "@/db/schema";

const handler = async (request: Request) => {
  const { method } = request;
  if (method === "POST") {
    const ownerData: newOwner = await request.json();
    console.log(ownerData)
    const postDataInTable = await db.insert(OwnerTable).values(ownerData);
    return NextResponse.json({ message: postDataInTable.count, data: postDataInTable });
  }
  const ownerData =await db.select().from(OwnerTable);
  return NextResponse.json({ data: ownerData });
};

export { handler as GET, handler as POST };
