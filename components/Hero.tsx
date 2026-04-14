import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <section className="w-full bg-black text-white">
      
      {/* Container */}
      <div className="max-w-[1150px] mx-auto px-6 min-h-screen flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-gray-400 mb-2">Hello, I'm</p>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Lav Kushwaha
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 mb-6">
            I enjoy building intelligent solutions and exploring the possibilities of AI.
          </p>

          <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            About Me
          </button>

          {/* Social Icons */}
         <div className="flex justify-center md:justify-start gap-5 mt-6 text-2xl">
            <FaGithub className="hover:text-gray-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
            <MdEmail className="hover:text-red-400 cursor-pointer" />
            </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <Image
            src="/profile.jpg"
            alt="profile"
            width={450}
            height={400}
            className="rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}