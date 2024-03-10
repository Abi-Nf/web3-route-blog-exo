import { PropsWithChildren } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalLayout } from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3 app",
  description: "Just exercises",
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalLayout>
          {children}
        </GlobalLayout>
      </body>
    </html>
  );
}
