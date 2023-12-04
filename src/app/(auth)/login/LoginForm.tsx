"use client";
import React, { useState, useEffect } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@components/ui/button";
import Link from "next/link";

const loginSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.email({ message: "Invalid Email" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

const LoginForm = () => {
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
					<p className="text-xl text-red-500 mt-2">{errors.email?.message}</p>
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
				Don't have an account ?{" "}
				<Link className="text-[#383737] text-[20px]" href="/signup">
					Make one!
				</Link>
			</p>
		</form>
	);
};

export default LoginForm;
