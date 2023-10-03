import Nav from "@/components/nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stock Sage",
  description: "Stock analysis and prediction tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  switch (Object(children).props.childProp.segment) {
    case "login":
      return (
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      );
    default:
      return (
        <html lang="en">
          <body className={inter.className}>
            <Nav />
            {children}
          </body>
        </html>
      );
  }
}
