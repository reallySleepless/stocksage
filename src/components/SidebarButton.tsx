"use client";

import Image from "next/image";
import logo from "@assets/logo.png";

interface SidebarButtonProps {
  text?: string;
  icon: string;
}

const SidebarButton = ({ text, icon }: SidebarButtonProps) => {
  return (
    <button
      onClick={() => {
        console.log("clicked");
      }}
      className="bg-accent-background w-full flex text-center text-lg justify-start items-center gap-4 p-5 pl-16 mr-8 ml-2 flex-wrap rounded-lg text-black"
    >
      <Image src={logo} alt="Dashboard" height={30} />
      {text}
    </button>
  );
};

export default SidebarButton;
