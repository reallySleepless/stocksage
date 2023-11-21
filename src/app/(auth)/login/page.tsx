"use client";
import Image from "next/image";
import logo from "@assets/logo.png";
import styles from "./login.module.css";
import { Button } from "@components/ui/button";
import Link from "next/link";

const Login = () => {
	return (
		<div className="bg-secondary-background h-screen">
			<Image src={logo} alt="StockSage" height={110} className="py-10" />
			<div className="w-[80%] m-auto mt-24">
				<div className={styles.loginTitle}>
					<h1>Welcome Back !</h1>
					<p className="mt-5">
						Enter your email to receive a one-time password
					</p>
				</div>
				<form action="" className={styles.loginForm}>
					<div>
						<input
							type="text"
							placeholder={"Enter your email"}
							className="focus:outline-none p-2 w-full h-[60px] text-[16px] font-light bg-[#1D1A39]"
						/>
					</div>
					<div className="mt-5">
						<input type="checkbox" className="bg-[#1D1A39] text" />
						<label htmlFor="remeberMe" className="ml-3 text-[16px]">
							Remeber Me
						</label>
					</div>

					<Button className="w-full mt-7 h-[60px] text-[24px] font-light bg-[#1D1A39]">
						Send 4-digit code
					</Button>
					<p className="text-center mt-3 text-[#5A5A5A] text-[20px]">
						Don’t have an account ?{" "}
						<Link className="text-[#383737] text-[20px]" href="/signup">
							Make one!
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
