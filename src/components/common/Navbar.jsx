"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import arrow from "../../../public/lottie1.json"

const Navbar = () => {
  const pathname = usePathname(); // get current path

  const links = [
    { href: "/", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Me" },
  ];

  return (
    <div className='nav content-container'>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative px-2 ${isActive ? "active logo" : "logo"}`}
          >
            {link.label}
          </Link>
        );
      })}
      <div className="site-animation">
        <Link href='/new'>
          v2
        </Link>
      <DotLottieReact
      data={arrow}
      loop
      autoplay
        />
      </div>
    </div>
  );
};

export default Navbar;
