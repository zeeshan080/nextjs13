"use client";
import { useEffect, useState } from "react";
import { Item } from "../types/common";
import { Stripe, loadStripe } from "@stripe/stripe-js";

type Props = {
  btnName: string;
  styles: string;
  item: Item[];
};

export default function CheckOutButton({ btnName, styles, item }: Props) {
  const [stripe, setStripe] = useState<Stripe | null>(null);

  useEffect(() => {
    const initializeStripe = async () => {
      const stripePublicKey: string =
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY ?? "";
      const stripeInstance = await loadStripe(stripePublicKey);
      setStripe(stripeInstance);
    };

    initializeStripe();
  }, []);
  const handlePayment = async () => {
    if (stripe) {
      try {
        const response = await fetch("/api/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ item }),
        });

        const { session } = await response.json();

       
        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (error) {
          throw new Error(error.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <button className={styles} onClick={handlePayment}>
      {btnName}
    </button>
  );
}
