import Image from "next/image";
import logo from "@assets/logo.png";
import styles from "./style.module.css";
import { Button } from "@components/ui/button";
import Link from "next/link";

const OTP = () => {
	return (
		<div className="bg-secondary-background h-screen">
			<Image src={logo} alt="StockSage" height={110} className="py-10" />
			<div className="w-[80%] m-auto mt-24">
				<div className={styles.otpTitle}>
					<h1>Enter Code!</h1>
					<p className="mt-5">Code sent to:</p>
				</div>
				<form action="" className={styles.otpForm}>
					<div className="flex justify-between">
						<input type="number" />
						<input type="number" />
						<input type="number" />
						<input type="number" />
					</div>
					<Button className="w-full mt-7 h-[60px] text-[24px] font-light bg-[#1D1A39]">
						Sign In
					</Button>
					<p className="text-center mt-3 text-[#5A5A5A] text-[20px]">
						Didn’t receive code ?{" "}
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
