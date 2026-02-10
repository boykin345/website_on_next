"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
    </div>
  );
};

export default Navbar;
