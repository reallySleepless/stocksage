"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@assets/logo.png";
import { Button } from "@components/ui/button";
import Link from "next/link";
import "@fontsource/plus-jakarta-sans";

const OTP = () => {
	const inputRefs = Array.from({ length: 4 }, () =>
		useRef<HTMLInputElement>(null)
	);

	useEffect(() => {
		inputRefs[0].current!.focus();
	}, []);

	const handleInputChange = (index: number, value: string) => {
		const regex = /^[0-9\b]+$/;

		if (!regex.test(value)) {
			inputRefs[index].current!.value = "";
			return;
		}

		const newValue = value.slice(0, 1);

		if (newValue !== value) {
			inputRefs[index].current!.value = newValue;
		}

		if (newValue && index < inputRefs.length - 1) {
			inputRefs[index + 1].current!.focus();
		}
	};

	const handleInputKeyDown = (
		index: number,
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (
			e.key === "Backspace" &&
			index > 0 &&
			!inputRefs[index].current!.value
		) {
			inputRefs[index - 1].current!.focus();
		}
	};

	return (
		<div className="bg-secondary-background h-screen font-[plus-jakarta-sans]">
			<Image src={logo} alt="StockSage" height={110} className="py-10" />
			<div className="w-[80%] m-auto mt-24">
				<div className="font-[400]">
					<h1 className="text-[64px] leading-[100%]">Enter Code!</h1>
					<p className="text-[24px] leading-[100%] mt-5">Code sent to:</p>
				</div>
				<form action="" className={`mt-[50px] w-[500px]`}>
					<div className="flex justify-between">
						{inputRefs.map((ref, index) => (
							<input
								key={index}
								ref={ref}
								type="text"
								className="w-[78px] h-[78px] text-[24px] text-center bg-[#1d1a3999] rounded-sm"
								onChange={(e) => handleInputChange(index, e.target.value)}
								onKeyDown={(e) => handleInputKeyDown(index, e)}
								max="1"
							/>
						))}
					</div>
					<Button className="w-full mt-7 h-[60px] text-[24px] font-light bg-[#1D1A39]">
						Sign In
					</Button>
					<p className="text-center mt-3 text-[#5A5A5A] text-[20px]">
						Didn't receive code?{" "}
						<Link className="text-[#383737] text-[20px]" href="">
							Re-send
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default OTP;
