"use client";

import { useState } from "react";
import { FiSun, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-800 bg-black text-white">
      <div className="max-w-[1150px] mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold">
          <h1>Lav Kushwaha</h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white text-gray-400 font-semibold duration-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Theme Icon */}
          <FiSun
            aria-label="Toggle Theme"
            className="text-xl cursor-pointer hover:text-yellow-400 transition"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <FiSun className="text-xl cursor-pointer" />

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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-black border-t border-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}