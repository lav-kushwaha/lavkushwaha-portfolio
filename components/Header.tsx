"use client";

import { useState } from "react";
import { FiSun, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/navLinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-gray-800 bg-black/70 backdrop-blur-md text-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          
          {/* Logo */}
         <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-white hover:opacity-80 transition"
        >
          Lav Kushwaha
        </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-semibold transition ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* <FiSun className="text-xl cursor-pointer" /> */}
          </div>

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center gap-4 z-50">
            {/* <FiSun className="text-xl cursor-pointer" /> */}

            {isOpen ? (
              <FiX
                className="text-2xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-2xl cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-xl z-40">
          
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}