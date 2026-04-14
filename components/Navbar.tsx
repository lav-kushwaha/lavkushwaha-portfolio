import { FiSun } from "react-icons/fi";
import Link from "next/link";
import { navLinks } from "@/constants/constant";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black text-white">
      <div className="max-w-[1150px] mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo */}
      <Link href="/" className="text-2xl font-semibold">
        <h1>Lav Kushwaha</h1>
      </Link>

        {/* Links */}
        <div className="flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-gray-400 transition"
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

      </div>
    </nav>
  );
}