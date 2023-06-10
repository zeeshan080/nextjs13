import Footer from "./components/ui/footer";
import MainNavbar from "./components/ui/main-navbar";
import "./globals.css";

import { Poppins } from "next/font/google";
import ReduxProvider from "./utils/redux-provider";

export const metadata = {
  title: "ZeeMart",
  description: "a brand new ecommerce website for clothes",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={`${poppins.className}bg-gray-200` }>
          <MainNavbar />
          {children}
          <Footer />
        </body>
      </ReduxProvider>
    </html>
  );
}
