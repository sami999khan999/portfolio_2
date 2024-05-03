import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AOSInit } from "@/components/Aos";
import { Toaster } from "react-hot-toast";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "A personal portfolio of a webdeveloper.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-peach-600 ${manrope.className}`}>
        <NextTopLoader color="#5700FF" showSpinner={false} />
        <AOSInit />
        {children}
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
