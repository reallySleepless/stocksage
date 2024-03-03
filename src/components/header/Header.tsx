import React from "react";
import Image from "next/image";
import logo from "@assets/logo.svg";
import Navbar from "@components/navbar/Navbar";
import ProfilePill from "@components/ProfilePill";

const Header = () => {
	return (
		<div className="w-full flex gap-10 justify-between">
			<Image src={logo} alt="Logo" height={100}></Image>
			<Navbar />
			<ProfilePill />
		</div>
	);
};

export default Header;
