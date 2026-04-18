"use client";

import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { profile } from "@/constants/profile";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-5 py-32 sm:py-28 lg:py-44">
        <div className="grid lg:grid-cols-2 gap-20 items-center ">
          
          {/* LEFT */}
          <div className="space-y-3 lg:space-y-3 text-center lg:text-left">

            {/* Overline */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="h-px w-7 bg-amber-400/30" />
              <p className="text-[11px] font-semibold tracking-[0.2em] text-amber-400/60 uppercase">
                Hello I am
              </p>
              <div className="h-px w-7 bg-amber-400/30 lg:hidden" />
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-none text-white">
                {profile?.name}
              </h1>

              <div className="h-[3px] w-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto lg:mx-0" />

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-400 tracking-wide">
                {profile?.role}
              </h2>
            </div>

            {/* Description */}
            <p className="text-[15px] sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light tracking-wide">
              {profile?.intro}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-4">
              <Link
                href="/projects"
                className="group relative px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 rounded-lg font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.03] active:scale-[0.97]"
              >
                <span className="relative  z-10 flex items-center justify-center gap-2">
                  Explore My Work
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* <Link
                href="/contact"
                className="px-8 py-3.5 border border-slate-700 rounded-lg text-slate-300 font-semibold text-sm tracking-wide hover:border-amber-400/60 hover:text-amber-400 hover:bg-amber-400/[0.04] transition-all duration-300"
              >
                Get In Touch
              </Link> */}
            </div>

            {/* Socials */}
            <p className="text-xs uppercase tracking-widest text-slate-500 pt-6">
              Socials
            </p>

            <div className="flex justify-center lg:justify-start gap-2.5 pt-2">
              {[
                {
                  icon: <FaGithub className="w-[18px] h-[18px]" />,
                  link: profile?.contact?.github,
                  label: "GitHub",
                },
                {
                  icon: <FaLinkedin className="w-[18px] h-[18px]" />,
                  link: profile?.contact?.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: <FaXTwitter className="w-[18px] h-[18px]" />,
                  link: profile?.contact?.twitter,
                  label: "Twitter",
                },
                {
                  icon: <FaEnvelope className="w-[18px] h-[18px]" />,
                  link: profile?.contact?.email
                    ? `mailto:${profile.contact.email}`
                    : null,
                  label: "Email",
                },
              ].map((item, i) =>
                item.link ? (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.label}
                    className="group p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/80 text-slate-400 hover:text-amber-400 hover:border-amber-400/50 hover:bg-slate-800 transition-all duration-200"
                  >
                    {item.icon}
                  </a>
                ) : null
              )}
            </div>
          </div>

          {/* RIGHT — Image */}
          <div className="relative flex items-center justify-center lg:justify-end group">
            <div className="relative w-full aspect-square max-w-sm lg:max-w-md">

              {/* Ambient glow */}
              <div
                className="absolute inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(251,191,36,0.08) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />

              {/* Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/60">
                <Image
                  src={profile?.images?.[0] || "/placeholder.png"}
                  alt="Profile"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  priority
                />

                {/* Inner vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]" />
              </div>

              {/* Corner accents */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t border-r border-amber-400/20 rounded-tr-xl group-hover:border-amber-400/50 transition-colors duration-500" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b border-l border-amber-400/20 rounded-bl-xl group-hover:border-amber-400/50 transition-colors duration-500" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;