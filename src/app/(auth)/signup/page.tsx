import Image from "next/image";
import logo from "@assets/logo.svg";
import SignUpImage from "@assets/Auth/Signup.svg";

import "@fontsource/plus-jakarta-sans";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
	return (
		<div className="bg-white font-[plus-jakarta-sans]">
			<div>
				<Image src={logo} alt="StockSage" height={105} className="py-5" />
				<div className="flex justify-between items-center">
					<div className="m-auto mt-24 px-10">
						<div className="font-normal flex flex-col gap-2">
							<h1 className="text-6xl font-bold text-[#407BFF]">
								<span className="text-[#2D56B2]">Welcome To</span> StockSage{" "}
								<span className="text-[#3D5A80]">!</span>
							</h1>
							<p className="text-[24px] leading-[100%] text-[#7AA3FF]">
								Your Ultimate Trading Hub
							</p>
						</div>

						<SignUpForm />
					</div>
					<Image
						src={SignUpImage}
						alt="Sign up Image"
						className="w-1/2 h-[700px]"
					></Image>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
