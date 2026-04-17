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

export default function ProjectSection({ title, show = false, limit }: Props) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="w-full  text-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto sm:px-8 lg:px-5">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 lg:mb-10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-px w-7 bg-amber-400/40" />
              <p className="text-[11px] font-semibold tracking-[0.2em] text-amber-400/60 uppercase">
                Portfolio
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-none text-white">
              {title}
            </h2>
          </div>

          {show && (
            <Link
              href="/projects"
              className="shrink-0 flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-lg text-slate-300 text-sm font-semibold tracking-wide hover:border-amber-400/60 hover:text-amber-400 hover:bg-amber-400/[0.04] transition-all duration-300"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          )}
        </div>

        {/* Projects */}
        <div className="flex flex-col">
          {displayedProjects.map((project, index) => (
            <div key={project._id} className="group relative">

              <div className="h-px w-full bg-slate-800 group-hover:bg-amber-400/20 transition-colors duration-500" />

              <div
                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 py-16 lg:py-20 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* LEFT */}
                <div className="md:w-1/2 w-full flex flex-col gap-7">

                  {/* Index + Title */}
                  <div className="relative">
                    <span className="absolute text-[6rem] font-black -top-8 -left-1 text-white/[0.03] select-none leading-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-bold tracking-[0.2em] text-amber-400/50 uppercase">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-slate-800" />
                    </div>

                    <h3 className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 leading-relaxed text-[15px] font-light max-w-md">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  {project.techStack?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-semibold tracking-wide bg-slate-900 border border-slate-800 text-slate-400 rounded-md hover:border-amber-400/40 hover:text-amber-400/80 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-3 flex-wrap pt-1">

                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 text-slate-950 text-xs font-bold tracking-wide hover:bg-amber-300 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
                      >
                        <LuLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}

                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 text-xs font-semibold tracking-wide hover:border-slate-500 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
                      >
                        <LuGithub className="w-3.5 h-3.5" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                {/* RIGHT */}
                {project.thumbnail && (
                  <div className="md:w-1/2 w-full">
                    <div className="relative overflow-hidden rounded-2xl border border-white/[0.06]">

                      <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-400/20 rounded-tl-2xl z-10  transition-colors duration-500" />
                      <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-400/20 rounded-br-2xl z-10 transition-colors duration-500" />
                      <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] z-10" />

                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={700}
                        height={450}
                        className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="h-px w-full bg-slate-800" />
        </div>

      </div>
    </section>
  );
}