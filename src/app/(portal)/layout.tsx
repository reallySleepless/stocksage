import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stock Sage",
  description: "Stock analysis and prediction tool",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-[1fr_5fr] justify-center gap-6 overflow-hidden">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
