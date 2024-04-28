import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {QueryClientProvider, QueryClient} from 'react-query'

const inter = Inter({ subsets: ["latin"] });
const queryCleint = new QueryClient();

export const metadata: Metadata = {
  title: "Home",
  description: "Product page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryCleint}>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
    </QueryClientProvider>
  );
}
