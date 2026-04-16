"use client";

import Image from "next/image";
import Link from "next/link";
import { LuGithub, LuLink } from "react-icons/lu";
import { projects } from "@/constants/projects";

type Props = {
  title: string;
  show?: boolean;
  limit?: number;
};

export default function ProjectSection({
  title,
  show = false,
  limit,
}: Props) {
  const displayedProjects = limit
    ? projects.slice(0, limit)
    : projects;

  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center md:text-left">
            {title}
          </h1>

          {show && (
            <Link
              href="/projects"
              className="px-5 py-2 border border-gray-700 rounded-full text-gray-300 hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
            >
              View All Projects →
            </Link>
          )}
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-28">
          {displayedProjects.map((project, index) => (
            <div
              key={project._id}
              className={`flex flex-col md:flex-row items-center gap-12 group ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* LEFT */}
              <div className="md:w-1/2 w-full flex flex-col gap-6">

                {/* Number + Title */}
                <div className="relative">
                  <span className="absolute text-[7rem] font-extrabold -top-10 -left-2 text-gray-800 opacity-30 group-hover:opacity-50 transition">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="relative z-10 text-3xl md:text-4xl font-bold tracking-wide group-hover:text-amber-400 transition duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {project.techStack?.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 text-sm bg-gray-900 border border-gray-800 text-gray-300 rounded-full hover:border-amber-500 hover:text-amber-400 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* PREMIUM LINKS */}
                <div className="flex gap-4 mt-6 flex-wrap">

                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-2 px-4 py-2 rounded-lg
                        bg-gray-900 border border-gray-800
                        text-sm text-gray-300
                        hover:border-amber-500 hover:text-amber-400
                        hover:-translate-y-0.5
                        transition-all duration-300
                      "
                    >
                      <LuLink className="text-base" />
                      Live Demo
                    </a>
                  )}

                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-2 px-4 py-2 rounded-lg
                        bg-gray-900 border border-gray-800
                        text-sm text-gray-300
                        hover:border-white hover:text-white
                        hover:-translate-y-0.5
                        transition-all duration-300
                      "
                    >
                      <LuGithub className="text-base" />
                      Source Code
                    </a>
                  )}

                </div>

              </div>

              {/* RIGHT IMAGE */}
              {project.thumbnail && (
                <div className="md:w-1/2 w-full">
                  <div className="relative overflow-hidden rounded-2xl">

                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="rounded-2xl w-full h-64 md:h-72 object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}