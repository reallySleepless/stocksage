import DownArrow from "@assets/icons/DownArrow";
import React from "react";

interface ProfilePillProps {
  className?: string;
}

const ProfilePill = ({ className }: ProfilePillProps) => {
  const userName = "Himanshu";
  return (
    <div
      className={`w-1/6 h-16 bg-secondary-background rounded-full flex items-center gap-0 fhd:gap-4 pl-2 pr-4 min-w-fit ${
        className || ""
      }`}
    >
      <div className="rounded-full border-white border-2 h-4/6 fhd:h-5/6 aspect-square"></div>
      <DownArrow />
      <span>{userName || "Test User"}</span>
    </div>
  );
};

export default ProfilePill;
