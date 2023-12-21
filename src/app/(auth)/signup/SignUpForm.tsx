"use client";
import React, { useEffect } from "react";
import { Button } from "@components/ui/button";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import UserModel from "@models/user";
import connectMongoDB from "@lib/mongodb";

const signupSchema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.email({ message: "Invalid Email" }),
});

type SignUpSchema = z.infer<typeof signupSchema>;

// const userSchema = new mongoose.Schema({
// 	name: {
// 		type: String,
// 		required: [true, "Name is required"],
// 	},
// 	email: {
// 		type: String,
// 		required: [true, "Email is required"],
// 		validate: {
// 			validator: (value: string) => /\S+@\S+\.\S+/.test(value),
// 			message: "Invalid Email",
// 		},
// 	},
// });

const SignUpForm = () => {
	useEffect(() => {
		connectMongoDB();
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpSchema>({
		resolver: zodResolver(signupSchema),
	});

	const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
		const user = new UserModel(data);
		await user.save();
		console.log("User created successfully");
		// try {
		// 	const res = await fetch("../api/users", {
		// 		method: "POST",
		// 		body: JSON.stringify(data),
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 	});
		// 	if (res.ok) {
		// 		console.log("User created successfully");
		// 		window.location.href = "/otp";
		// 	} else {
		// 		console.log("User creation failed");
		// 	}
		// } catch (err) {
		// 	console.log(err);
		// }
	};

	return (
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
					<p className="text-xl text-red-500 mt-2">{errors.name?.message}</p>
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
					<p className="text-xl text-red-500 mt-2">{errors.email?.message}</p>
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
	);
};

export default SignUpForm;
