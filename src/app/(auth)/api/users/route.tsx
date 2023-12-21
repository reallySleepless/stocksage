import { connectMongoDB } from "@lib/mongodb";
import User from "@models/user";
import { NextResponse } from "next/server";

export const getUserDetails = async (request: {
	json: () => PromiseLike<{ name: string; email: string }>;
}) => {
	const { name, email } = await request.json();
	await connectMongoDB();
	await User.create({ name, email });
	return NextResponse.json(
		{ message: "User created successfully" },
		{ status: 200 }
	);
};
