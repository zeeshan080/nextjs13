import { NextRequest, NextResponse } from "next/server";
import { db, ProductsTable } from "@/lib/drizzle";
import { eq } from "drizzle-orm";


export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const size = Array.from(params.values()).length;
  let findId: number = 0;
  if (size === 0) {
    try {
      const allProducts = await db.select().from(ProductsTable);
      if (allProducts.length === 0) {
        return NextResponse.json({ meessage: "no products available" });
      }
      return NextResponse.json(allProducts);
    } catch (error) {
      console.error(error);
    }
  }

  params.forEach((id, slug) => {
    if (slug === "id") {
      findId = Number(id);
    }
  });
  try {
    const findProduct = await db.select().from(ProductsTable).where(eq(ProductsTable.id,findId));
    if (findProduct.length === 0) {
      return NextResponse.json({ message: "product does not exists" });
    }
    return NextResponse.json(findProduct);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "no product table exists yet." });
  }
}


