"use client";
import React, { useEffect } from "react";
import { Button } from "@components/ui/button";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signupSchema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.email({ message: "Invalid Email" }),
});

type SignUpSchema = z.infer<typeof signupSchema>;

const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpSchema>({
		resolver: zodResolver(signupSchema),
	});

	const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
		console.log(data);
	};

	return (
		<form
			action=""
			className="mt-[50px] w-[500px]"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="flex flex-col gap-2">
				<label htmlFor="name" className="text-[24px] text-[#2D56B2]">
					Name
				</label>
				<input
					className={`w-full focus:outline-none bg-[#edf2f5] h-[60px] p-[10px] text-[24px]  ${
						errors.name && "border-red-500"
					} rounded appearance-none focus:outline-none focus:shadow-outline`}
					id="name"
					type="text"
					placeholder="Enter your name"
					{...register("name")}
				/>
				{errors.name && (
					<p className="text-xl text-red-500 mt-2">{errors.name?.message}</p>
				)}
			</div>
			<div className="flex flex-col mt-7 gap-2">
				<label htmlFor="email" className="text-[24px] text-[#2D56B2]">
					Email
				</label>
				<input
					className={`w-full bg-[#edf2f5] h-[60px] p-[10px] text-[24px]  ${
						errors.email && "border-red-500"
					} focus:outline-none`}
					id="email"
					type="email"
					placeholder="Enter your email"
					{...register("email")}
				/>
				{errors.email && (
					<p className="text-xl text-red-500 mt-2">{errors.email?.message}</p>
				)}
			</div>
			<Button
				className="w-full mt-5 h-[60px] text-[24px] font-light bg-[#407bff]"
				type="submit"
			>
				Sign Up
			</Button>
			<p className="text-center mt-3 text-[#7AA3FF] text-[20px]">
				Have an account?{" "}
				<Link className="text-[#2D56B2] text-[20px]" href="/login">
					Login
				</Link>
			</p>
		</form>
	);
};

export default SignUpForm;
