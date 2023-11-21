"use client";

import Image from "next/image";
import logo from "@assets/logo.png";
import styles from "./signup.module.css";
import { Button } from "@components/ui/button";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signupSchema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	email: z
		.string()
		.email({ message: "Invalid Email" })
		.min(1, { message: "Email is required" }),
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
		<div className="bg-secondary-background h-screen">
			<Image src={logo} alt="StockSage" height={110} className="py-10" />
			<div className="w-[80%] m-auto mt-24">
				<div className={styles.signupTitle}>
					<h1>Welcome To StockSage !</h1>
					<p>Your Ultimate Trading Hub</p>
				</div>
				<form
					action=""
					className={styles.signupForm}
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="flex flex-col gap-2">
						<label htmlFor="name" className="text-[24px]">
							Name
						</label>
						<input
							className={`w-full focus:outline-none ${
								errors.name && "border-red-500"
							} rounded appearance-none focus:outline-none focus:shadow-outline`}
							id="name"
							type="text"
							placeholder="Enter your name"
							{...register("name")}
						/>
						{errors.name && (
							<p className="text-xs italic text-red-500 mt-2">
								{errors.name?.message}
							</p>
						)}
					</div>
					<div className="flex flex-col mt-7 gap-2">
						<label htmlFor="email" className="text-[24px]">
							Email
						</label>
						<input
							className={`w-full ${
								errors.email && "border-red-500"
							} focus:outline-none`}
							id="email"
							type="email"
							placeholder="Email"
							{...register("email")}
						/>
						{errors.email && (
							<p className="text-xs italic text-red-500 mt-2">
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
	);
};

export default SignUp;
