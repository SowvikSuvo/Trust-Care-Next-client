"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/img/logo2.png";
import Container from "./Container";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-200 to-teal-200 sticky top-0 z-50">
      <Container>
        <div className="py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={50}
                height={50}
                className="h-[50px] w-[50px]"
              />
            </Link>
            <h2 className="text-xl font-bold text-black">Trust Care</h2>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-[16px] font-semibold text-black">
            <Link className="hover:text-teal-600 transition" href="/">
              Home
            </Link>
            <Link className="hover:text-teal-600 transition" href="/services">
              Services
            </Link>
            <Link className="hover:text-teal-600 transition" href="/reviews">
              Reviews
            </Link>
            <Link className="hover:text-teal-600 transition" href="/aboutUs">
              About Us
            </Link>
          </ul>

          {/* Desktop Login */}
          <div className="hidden md:block">
            <Link href="/login">
              <button className="px-6 py-2 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-black"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 text-center text-black">
            <Link
              onClick={() => setOpen(false)}
              href="/"
              className="font-medium"
            >
              Home
            </Link>

            <Link
              onClick={() => setOpen(false)}
              href="/services"
              className="font-medium"
            >
              Services
            </Link>

            <Link
              onClick={() => setOpen(false)}
              href="/reviews"
              className="font-medium"
            >
              Reviews
            </Link>

            <Link
              onClick={() => setOpen(false)}
              href="/aboutUs"
              className="font-medium"
            >
              About Us
            </Link>

            <Link onClick={() => setOpen(false)} href="/login">
              <button className="mt-3 w-full py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition">
                Login
              </button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
