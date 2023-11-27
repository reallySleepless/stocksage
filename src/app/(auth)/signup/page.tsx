"use client";

import Image from "next/image";
import logo from "@assets/logo.png";
import styles from "./signup.module.css";
import { Button } from "@components/ui/button";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "@fontsource/plus-jakarta-sans";

const signupSchema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.email({ message: "Invalid Email" }),
});

type SignUpSchema = z.infer<typeof signupSchema>;

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpSchema>({
		resolver: zodResolver(signupSchema),
	});

	const onSubmit: SubmitHandler<SignUpSchema> = (data) => console.log(data);

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
			<div>
				<Image src={logo} alt="StockSage" height={110} className="py-10" />
				<div className="w-[80%] m-auto mt-24">
					<div className="font-[400]">
						<h1 className="text-[64px] leading-[100%]">
							Welcome To StockSage !
						</h1>
						<p className="text-[24px] leading-[100%]">
							Your Ultimate Trading Hub
						</p>
					</div>
					<form
						action=""
						className="mt-[50px] w-[500px]"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="flex flex-col gap-2">
							<label htmlFor="name" className="text-[24px]">
								Name
							</label>
							<input
								className={`w-full focus:outline-none bg-[#1d1a3980] h-[60px] p-[10px] text-[24px] text-[#ffffff80] ${
									errors.name && "border-red-500"
								} rounded appearance-none focus:outline-none focus:shadow-outline`}
								id="name"
								type="text"
								placeholder="Enter your name"
								{...register("name")}
							/>
							{errors.name && (
								<p className="text-xl text-red-500 mt-2">
									{errors.name?.message}
								</p>
							)}
						</div>
						<div className="flex flex-col mt-7 gap-2">
							<label htmlFor="email" className="text-[24px]">
								Email
							</label>
							<input
								className={`w-full bg-[#1d1a3980] h-[60px] p-[10px] text-[24px] text-[#ffffff80] ${
									errors.email && "border-red-500"
								} focus:outline-none`}
								id="email"
								type="email"
								placeholder="Enter your email"
								{...register("email")}
							/>
							{errors.email && (
								<p className="text-xl text-red-500 mt-2">
									{errors.email?.message}
								</p>
							)}
						</div>
						<Button
							className="w-full mt-5 h-[60px] text-[24px] font-light bg-[#1D1A39]"
							type="submit"
						>
							Sign Up
						</Button>
						<p className="text-center mt-3 text-[#5A5A5A] text-[20px]">
							Have an account?{" "}
							<Link className="text-[#383737] text-[20px]" href="/login">
								Login
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
