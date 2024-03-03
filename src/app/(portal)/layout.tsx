import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@components/sidebar/Sidebar";
import Header from "@components/header/Header";
import "@fontsource/plus-jakarta-sans";

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
				<div className=" font-[plus-jakarta-sans]">
					<Header />
					{/* <Sidebar /> */}
					<div className="mt-6">{children}</div>
				</div>
			</body>
		</html>
	);
}
