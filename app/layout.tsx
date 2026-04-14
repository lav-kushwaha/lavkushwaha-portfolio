import "./globals.css";
import { Poppins, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Lav Kushwaha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} bg-black text-white`}>
          {children}
      </body>
    </html>
  );
}