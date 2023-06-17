import Navbar from "./components/navbar";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import Providers from "./providers";

const inter = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-200 dark:bg-[#171717]`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}