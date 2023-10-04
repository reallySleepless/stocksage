import Image from "next/image";
import logo from "@assets/logo.png";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <div className="bg-secondary-background p-4 flex flex-col items-center gap-4">
      <Image src={logo} alt="StockSage" height={110} className="mb-10" />
      <SidebarButton text="Dashboard" href="/dashboard" />
      <SidebarButton text="Trading & Market" href="/trading" />
      <SidebarButton text="Reporting & Transaction" href="/reporting" />
      <SidebarButton text="Research Portal" href="/research" />
    </div>
  );
};

export default Sidebar;
