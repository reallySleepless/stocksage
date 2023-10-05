import Image from "next/image";
import logo from "@assets/logo.png";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <div className="bg-secondary-background p-4 flex flex-col items-center gap-4 h-screen">
      <Image src={logo} alt="StockSage" height={110} className="mb-10" />
      <SidebarButton text="Dashboard" href="/dashboard" />
      <SidebarButton text={`Trading\u00A0&\u00A0Market`} href="/trading" />
      <SidebarButton
        text={`Reporting\u00A0&\u00A0Transaction`}
        href="/reporting"
      />
      <SidebarButton text={`Research\u00A0Portal`} href="/research" />
    </div>
  );
};

export default Sidebar;
