"use client";

import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="flex flex-col">
      <div className="border-t border-gray-800 bg-black text-gray-400 py-5 mt-auto transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm select-none">
          © {year} Lav Kushwaha. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;