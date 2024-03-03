import DownArrow from "@assets/icons/DownArrow";
import React from "react";

interface ProfilePillProps {
	className?: string;
}

const ProfilePill = ({ className }: ProfilePillProps) => {
	const userName = "Harshit Tibrewal";
	return (
		<div className="px-10 py-5">
			<div
				className={` h-16 bg-[#407bff] rounded-full flex items-center gap-0 pl-2 pr-4 min-w-fit text-white ${
					className || ""
				}`}
			>
				<div className="rounded-full border-white border-2 h-4/6 fhd:h-5/6 aspect-square bg-[#3266cc]"></div>
				<DownArrow />
				<span>{userName || "Test User"}</span>
			</div>
		</div>
	);
};

export default ProfilePill;
