"use client";

import Image from "next/image";
import { MdEmail } from "react-icons/md";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaCode,
  FaBook,
  FaPenNib,
} from "react-icons/fa";

import Skills from "@/components/Skills";
import { aboutData } from "@/constants/about";

export default function About() {
  const { bio, interests, contact, images } = aboutData;

  const interestIcons: Record<string, React.ReactNode> = {
    Coding: <FaCode />,
    reading: <FaBook className="text-green-500" />,
    "content creation": <FaPenNib className="text-purple-500" />,
  };

  return (
    <section className="w-full bg-black text-white px-5 md:px-10 py-16 mt-10">

      {/* Heading */}
      <h2 className="text-4xl md:text-8xl font-bold text-center mb-16">
        About Me
      </h2>

      {/* Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* IMAGE */}
        <div className="flex justify-center items-start order-1 md:order-2 mb-10 md:mb-0">
          {images?.[0] && (
            <div className="relative w-full max-w-md aspect-square group">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-700 to-yellow-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

              {/* Image */}
              <Image
                src={images[0]}
                alt="profile"
                fill
                className="
                  rounded-2xl object-cover relative z-10 shadow-xl
                  transition duration-500
                  group-hover:scale-105
                "
              />
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="space-y-8 ml-6 order-2 md:order-1">

          {/* Bio */}
          <p className="text-gray-300 text-lg leading-relaxed">
            {bio}
          </p>

          {/* Interests */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              My Interests
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {interests.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition"
                >
                  <span className="text-lg">
                    {interestIcons[item] || <FaCode />}
                  </span>
                  <span className="capitalize text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Get In Touch
            </h3>

            <div className="flex flex-wrap gap-4">

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition"
              >
                <MdEmail className="text-red-400" />
                <span>Email</span>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition"
              >
                <FaLinkedin className="text-blue-500" />
                <span>LinkedIn</span>
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <a
                href={contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition"
              >
                <FaTwitter className="text-sky-400" />
                <span>Twitter</span>
              </a>

            </div>
          </div>

        </div>

      </div>

      {/* Skills */}
      <div className="mt-20">
        <Skills />
      </div>

    </section>
  );
}