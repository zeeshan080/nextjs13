import { NextRequest, NextResponse } from "next/server";
import { db, ProductsTable, CategoriesTable } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import stripe from "../../utils/stripe";
import { Item } from "@/app/types/common";
import { NextApiResponse } from "next";

interface LineItem {
  price_data: {
    currency: string;
    product_data: {
      name: string;
      description: string;
      images: string[];
    };
    unit_amount: number;
  };
  quantity: number;
}

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const size = Array.from(params.values()).length;
  let findId: number = 0;
  if (size === 0) {
    try {
      const allProducts = await db
        .select()
        .from(ProductsTable)
        .innerJoin(
          CategoriesTable,
          eq(ProductsTable.category, CategoriesTable.id)
        );
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
    const findProduct = await db
      .select()
      .from(ProductsTable)
      .innerJoin(
        CategoriesTable,
        eq(ProductsTable.category, CategoriesTable.id)
      )
      .where(eq(ProductsTable.id, findId));

    if (findProduct.length === 0) {
      return NextResponse.json({ message: "product does not exists" });
    }
    return NextResponse.json(findProduct);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "no product table exists yet." });
  }
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  const { item } = req;

  const allItems: Item[] = item;

  const line_items = allItems.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.image[0]],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity.value,
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: "https://zeefilio-mini.vercel.app/",
      cancel_url: "https://zeefilio-mini.vercel.app/#contact",
    });

    return NextResponse.json({ session });
    // NextResponse.json({ "sessionId": session });

    //NextResponse.redirect(`${session.url}`);
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json({ error: "Unable to create checkout session." });
  }
}
