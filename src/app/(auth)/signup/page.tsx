import Image from "next/image";
import logo from "@assets/logo.png";
import styles from "./style.module.css";
import { Button } from "@components/ui/button";
import Link from "next/link";

const SignUp = () => {
	return (
		<div className="bg-secondary-background h-screen">
			<Image src={logo} alt="StockSage" height={110} className="py-10" />
			<div className="w-[80%] m-auto mt-24">
				<div className={styles.signupTitle}>
					<h1>Welcome To StockSage !</h1>
					<p>Your Ultimate Trading Hub</p>
				</div>
				<form action="" className={styles.signupForm}>
					<div className="flex flex-col gap-2">
						<label htmlFor="name" className="text-[24px]">
							Name
						</label>
						<input
							type="text"
							placeholder={"Enter your name"}
							className="focus:outline-none p-2"
						/>
					</div>
					<div className="flex flex-col mt-7 gap-2">
						<label htmlFor="email" className="text-[24px]">
							Email
						</label>
						<input
							type="text"
							placeholder={"Enter your email"}
							className="focus:outline-none p-2"
						/>
					</div>
					<Button className="w-full mt-5 h-[60px] text-[24px] font-light bg-[#1D1A39]">
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
