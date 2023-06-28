import { barlow } from "../../assets/font/font";
import "@/app/globals.css";

export const metadata = {
  title: 'SS Tailor',
  description: 'A web application for a tailor shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlow.className} bg-gray-100`}>{children}</body>
    </html>
  );
}
