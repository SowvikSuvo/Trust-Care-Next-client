import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/img/logo2.png";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-neutral w-full text-neutral-content">
      <Container>
        <div className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 rounded-xl">
          <div className="flex items-center gap-3">
            <Link href="/">
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

          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Baby Care</a>
            <a className="link link-hover">Elderly Care</a>
            <a className="link link-hover">Sick Care</a>
          </nav>

          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Careers</a>
          </nav>

          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms</a>
            <a className="link link-hover">Privacy</a>
            <a className="link link-hover">Cookies</a>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
