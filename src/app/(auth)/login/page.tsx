"use client";
import Image from "next/image";
import logo from "@assets/logo.png";
import { Button } from "@components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { z } from "zod";

import "@fontsource/plus-jakarta-sans";
import { useEffect, useState } from "react";
import React from "react";

const loginSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.email({ message: "Invalid Email" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
	});
	const [maxDimension, setMaxDimension] = useState(0);
	const onSubmit: SubmitHandler<LoginSchema> = (data) => console.log(data);
	useEffect(() => {
		setMaxDimension(Math.max(window.innerWidth, window.innerHeight));
	}, []);

	return (
		<div className="bg-secondary-background h-screen font-[plus-jakarta-sans]">
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
					<form
						action=""
						className="mt-[50px] w-[500px]"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div>
							<input
								type="text"
								id="email"
								placeholder={"Enter your email"}
								className={`focus:outline-none p-[10px] w-full h-[60px] text-[24px] font-light bg-[#1D1A39] ${
									errors.email && "border-red-500"
								}`}
								{...register("email")}
							/>
							{errors.email && (
								<p className="text-xl text-red-500 mt-2">
									{errors.email?.message}
								</p>
							)}
						</div>
						<div className="mt-5">
							<input type="checkbox" />
							<label htmlFor="rememberMe" className="ml-3 text-[24px]">
								Remember Me
							</label>
						</div>

						<Button className="w-full mt-7 h-[60px] text-[24px] font-light bg-[#1D1A39]">
							Send 4-digit code
						</Button>
						<p className="text-center mt-3 text-[#5A5A5A] text-[20px]">
							Don’t have an account ?{" "}
							<Link className="text-[#383737] text-[20px]" href="/signup">
								Make one!
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
