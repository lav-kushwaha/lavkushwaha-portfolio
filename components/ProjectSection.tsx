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
    <section className="w-full bg-black text-white">
      <div className="max-w-[1150px] mx-auto px-6 py-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair text-center">
            {title}
          </h1>

          {show && (
            <Link
              href="/projects"
              className="text-gray-400 hover:text-amber-500 transition"
            >
              View All Projects
            </Link>
          )}
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-24">
          {displayedProjects.map((project, index) => (
            <div
              key={project._id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* LEFT */}
              <div className="md:w-1/2 w-full relative flex flex-col gap-5">

                {/* Number + Title */}
                <div className="relative group">
                  <span className="absolute text-[8rem] font-extrabold -top-12 -left-2 text-gray-700 opacity-20">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="relative z-10 text-3xl md:text-4xl font-bold font-playfair group-hover:text-amber-500 transition">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {project.techStack?.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-5 mt-4 flex-wrap">
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-amber-500 hover:underline"
                    >
                      Live <LuLink />
                    </a>
                  )}

                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-amber-500 hover:underline"
                    >
                      Code <LuGithub />
                    </a>
                  )}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              {project.thumbnail && (
                <div className="md:w-1/2 w-full">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-2xl h-52 md:h-72 w-full object-cover transition hover:scale-105"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}