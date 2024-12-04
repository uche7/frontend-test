import React from "react";
import Image from "next/image";
import Profile_img from "@/assets/images/profile-img.svg";
import Trophy_icon from "@/assets/images/trophy-icon.svg";

/** Header */
export default function Header() {
  return (
    <div className="p-4">
      <div className="bg-[#3556AB] flex space-x-3 p-3 ">
        <Image
          src={Profile_img}
          alt="User Avatar"
          className="rounded-full w-12 h-12"
        />
        <div className="flex flex-col gap-[8px]">
          <h1 className="text-[#FFFFFF] text-[16px] font-[500] leading-[18.75px]">
            Hello, Jhon
          </h1>
          <p className="text-slate-400 font-[100] text-[25px] italic leading-[26.46px]">
            What are your plans for today?
          </p>
        </div>
      </div>
      <div className="bg-[#CDE53D] flex flex-row justify-between text-black px-2 py-8 border-2 border-[#9EB031] cursor-pointer">
        <div className="flex flex-row items-center gap-[10px]">
          <Image src={Trophy_icon} alt="Trophy Icon" width={40} height={40} />
          <p className="font-[700] text-[#071D55] text-[15px] leading-[19.05px]">
            Go Pro Upgrade Now
          </p>
        </div>
        <div className="bg-[#071D55] w-[66.11px] h-[71px] flex flex-col justify-center items-center font-[500] text-[#F2C94C] text-[18px] leading-[19.05px] -mt-8">
          $1
        </div>
      </div>
    </div>
  );
}
