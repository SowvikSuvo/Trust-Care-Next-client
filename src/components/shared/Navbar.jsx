import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/img/logo2.png";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-teal-200">
      <Container>
        <div className="py-4  font-bold text-5xl flex justify-between items-center text-black">
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
          <ul className="font-semibold text-[18px] flex gap-4 items-center">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/aboutUs">About Us</Link>
          </ul>
          <Link href={"/login"}>
            <button>Login</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
