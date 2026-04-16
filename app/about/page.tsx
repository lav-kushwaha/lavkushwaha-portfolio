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

import Skills from "@/components/Skills"
import {aboutData} from "@/constants/about"

export default function About() {
  const { bio, interests, contact, images } = aboutData;

 const interestIcons: Record<string, React.ReactNode> = {
  Coding: <FaCode />,
  reading: <FaBook className="text-green-500" />,
  "content creation": <FaPenNib className="text-purple-500" />,
};

  return (
    <div className="bg-black text-white px-4">
      
      {/* Heading */}
      <h2 className="text-7xl md:text-8xl font-bold text-center mb-20 mt-28">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-25 max-w-6xl mx-auto ">

        {/* LEFT */}
        <div className="space-y-7">

          {/* Bio */}
          <p className="text-lg text-gray-300 leading-relaxed">{bio}</p>

          {/* Interests */}
          <div>
            <h3 className="text-2xl font-bold mb-3">My Interests</h3>
            <div className="space-y-2">
              {interests.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                >
                  {interestIcons[item] || <FaCode />}
                  <span className="capitalize">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Get In Touch</h3>

            <div className="space-y-2">

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                <MdEmail className="text-red-400" />
                <span>{contact.email}</span>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                <FaLinkedin className="text-blue-500" />
                <span>LinkedIn</span>
              </a>

              <a
                href={contact.github}
                target="_blank"
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <a
                href={contact.twitter}
                target="_blank"
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                <FaTwitter className="text-sky-400" />
                <span>Twitter</span>
              </a>

            </div>
          </div>
        </div>

        {/* RIGHT (Images) */}
        <div className="grid grid-cols-2 gap-3">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-2xl">
              <Image
                src={img}
                alt={`about-${index}`}
                width={400}
                height={400}
                className="w-full h-[250px] md:h-[300px] object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Skills */}
      <div className="mt-16">
        <Skills/>
      </div>
    </div>
  );
}