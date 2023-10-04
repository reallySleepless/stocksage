import Image from "next/image";
import logo from "@assets/logo.png";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <div className="bg-secondary-background p-4 flex flex-col items-center gap-4">
      <Image src={logo} alt="StockSage" height={110} className="mb-10" />
      <SidebarButton text="Dashboard" />
      <SidebarButton text="Trading & Market" />
      <SidebarButton text="Reporting & Transaction" />
      <SidebarButton text="Research Portal" />
    </div>
  );
};

export default Sidebar;
