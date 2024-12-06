import type { Metadata } from "next";
import { Jost } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/templates/Navbar";
import Footer from "@/components/templates/Footer";

const font = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Novantigo",
  description: "A loja feita para voce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${font.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
