import Image from "next/image";
import logo from "@assets/logo.png";

import "@fontsource/plus-jakarta-sans";
import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
	return (
		<div className="bg-secondary-background h-screen font-[plus-jakarta-sans]">
			{/* Three adjacent line with different colors */}
			<div>
				<div
					className={`border-t border-[#D72435] -rotate-45 fixed origin-top-right right-0 top-0 w-[1920px]`}
				></div>
				<div
					className={`border-t border-[#983A78] -rotate-45 fixed origin-top-right right-0 top-[30%] w-[1920px]`}
				></div>
				<div
					className={`border-t border-[#7D4494] -rotate-45 fixed origin-top-right right-0 top-[60%] w-[1920px]`}
				></div>
			</div>
			<div className="z-10">
				<Image src={logo} alt="StockSage" height={110} className="py-10" />
				<div className="w-[80%] m-auto mt-24">
					<div className="font-[400]">
						<h1 className="text-[64px] leading-[100%]">Welcome Back !</h1>
						<p className="text-[24px] leading-[100%] mt-5">
							Enter your email to receive a one-time password
						</p>
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
