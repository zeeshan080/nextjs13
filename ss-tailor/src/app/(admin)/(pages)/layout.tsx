import { barlow } from "@/app/assets/font/font";
import "@/app/globals.css";
import Sidebar from "@/app/(admin)/components/sidebar";
import Navbar from "@/app/(admin)/components/navbar";
import Providers from "@/app/providers";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "SS Tailor",
  description: "A web application for a tailor shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlow.className} bg-gray-100`}>
        <Providers>
          <Suspense fallback={<Loading/>}>
            <main className="flex w-full p-3">
              <section className="w-[20%]">
                <Sidebar />
              </section>
              <section className="w-[80%] mx-2">
                <Navbar />
                {children}
              </section>
            </main>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
