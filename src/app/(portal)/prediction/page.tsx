import React from "react";
import logo from "@assets/logo.svg";
import Image from "next/image";
import Navbar from "@components/navbar/Navbar";
import ProfilePill from "@components/ProfilePill";
import Header from "@components/header/Header";

const Prediction = () => {
	return (
		<div className="py-20">
			<div className="w-[500px] mx-auto flex flex-col gap-3">
				<h2 className="text-[45px] font-bold">Predict Stock Prices</h2>
				<h3 className="text-[#2D56B2] text-[24px]">Enter a company name </h3>
				<input
					type="text"
					className="bg-[#E8EEF3] p-3 px-5 rounded-md w-full  font-semibold  border-none focus:outline-none focus:ring-2 focus:ring-[#2D56B2] focus:ring-opacity-50 transition-all duration-300 ease-in-out"
					placeholder="Microsoft, Apple, Google..."
				/>
				<div className="flex self-end gap-3">
					<button className="bg-[#E8EEF3] text-black py-3 px-5 rounded-md text-center">
						Cancel
					</button>
					<button className="bg-[#407BFF] text-white  py-3 px-5 rounded-md  text-center">
						Predict
					</button>
				</div>
			</div>
		</div>
	);
};

export default Prediction;
