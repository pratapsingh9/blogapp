import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/components/sesisonProvider";
import Navbar from "@/components/navbar";
import QueryProvider from "@/utils/QueryProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogo App",
  description: "My Personal Blogo Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <QueryProvider>
            <Navbar />

            <main className="flex-grow">
              {children}
            </main>
          </QueryProvider>
        </NextAuthProvider>

      </body>
    </html>
  );
}