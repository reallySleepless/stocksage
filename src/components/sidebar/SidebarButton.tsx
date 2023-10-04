"use client";

import Image from "next/image";
import logo from "@assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarButtonProps {
  text?: string;
  icon?: string;
  href: string;
}

const SidebarButton = ({ text, icon, href }: SidebarButtonProps) => {
  const isActive = usePathname() === href;
  console.log(isActive);
  return (
    <Link
      href={href}
      className={
        (isActive ? "bg-accent-background text-black" : "text-accent") +
        ` w-full flex text-center text-lg justify-start items-center gap-4 p-5 pl-16 mr-8 ml-2 flex-wrap rounded-lg`
      }
    >
      <Image src={logo} alt="Dashboard" height={30} />
      {text}
    </Link>
  );
};

export default SidebarButton;
