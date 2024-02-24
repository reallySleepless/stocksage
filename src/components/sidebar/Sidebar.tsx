import Image from "next/image";
import logo from "@assets/logo.svg";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
	return (
		<div className="bg-secondary-background p-2 pl-4 flex flex-col items-center gap-4 h-screen">
			<Image src={logo} alt="StockSage" height={90} className="mb-10" />
			<SidebarButton text="Dashboard" href="/dashboard" />
			<SidebarButton text={`My\u00A0Stocks`} href="/myStocks" />
			<SidebarButton text={`Prediction`} href="/prediction" />
			<SidebarButton text={`Research\u00A0Portal`} href="/research" />
		</div>
	);
};

export default Sidebar;
