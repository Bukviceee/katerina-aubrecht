import type { Metadata } from "next";
import { Josefin_Sans, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Kateřina Aubrecht | Fotografka",
  description: "Nejen fotky. Příběh, který prožijete znovu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={`${josefin.variable} ${nunito.variable} font-body antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
