"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/img/logo.png";

const DashboardSidebar = () => {
  return (
    <div className="w-[200px] bg-purple-200 text-black h-screen px-3 py-4 fixed top-0 left-0">
      <div className="flex items-center gap-3">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            width={60}
            height={60}
            className="h-[60px] w-[60px]"
          />
        </Link>
        <h2 className="text-xl font-bold">Trust Care</h2>
      </div>

      <div className="flex flex-col gap-2 mt-7">
        <Link href={"/dashboard/profile"}>Profile</Link>
        <Link href={"/dashboard/my-bookings"}>My Booking</Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
