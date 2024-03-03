"use client";
import React from "react";
import DashboardImg from "@assets/icons/Dashboard.svg";
import PredictionImg from "@assets/icons/Prediction.svg";
import MyStocks from "@assets/icons/MyStock.svg";
import Settings from "@assets/icons/Settings.svg";
import Research from "@assets/icons/ResearchPortal.svg";
import Image from "next/image";
import "@fontsource/plus-jakarta-sans";
import Link from "next/link";

const navList = [
	{
		name: "Dashboard",
		icon: DashboardImg,
		link: "/dashboard",
	},
	{
		name: "My Stocks",
		icon: MyStocks,
		link: "/mystocks",
	},
	{
		name: "Prediction",
		icon: PredictionImg,
		link: "/prediction",
	},
	{
		name: "Research Portal",
		icon: Research,
		link: "/research",
	},
	{
		name: "Settings",
		icon: Settings,
		link: "/settings",
	},
];

const Navbar = () => {
	return (
		<div className="p-1 flex gap-10 justify-center items-center flex-wrap font-[plus-jakarta-sans] lg:border-b lg:border-b-[#0000002d]">
			{navList.map((item, index) => (
				<div key={index} className="flex gap-2 items-center">
					<Image src={item.icon} alt={item.name} width={24} />
					<Link
						className={`text-[24px] font-semibold border-b border-b-transparent text-[#2D56B2] hover:border-b hover:border-b-black `}
						href={item.link}
					>
						{item.name}
					</Link>
				</div>
			))}
		</div>
	);
};

export default Navbar;
