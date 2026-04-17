"use client";

import { useState, useEffect } from "react";
import { skillsData } from "@/constants/skills";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    if (!activeCategory && skillsData.length > 0) {
      setActiveCategory(skillsData[0]._id);
    }
  }, [activeCategory]);

  const currentCategory = skillsData.find((cat) => cat._id === activeCategory);

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-white">

      {/* EYEBROW */}
      <p className="text-xs font-medium tracking-[0.15em] uppercase text-amber-400 mb-3">
        What I work with
      </p>

      {/* TITLE */}
      <h1 className="text-4xl md:text-6xl font-bold mb-10 text-[#f1f0eb] leading-tight">
        Technical <span className="text-amber-400">Skills</span>
      </h1>

      {/* TABS */}
      <div className="flex flex-wrap gap-2 mb-2 border-b border-white/[0.07] pb-6">
        {skillsData.map((category) => {
          const isActive = activeCategory === category._id;
          return (
            <button
              key={category._id}
              onClick={() => setActiveCategory(category._id)}
              className={`relative px-5 py-1.5 rounded-full text-[13px] border transition-all duration-200
                ${
                  isActive
                    ? "border-amber-500/50 bg-amber-500/[0.08] text-amber-400"
                    : "border-white/10 text-gray-400 hover:text-amber-400 hover:border-amber-500/30"
                }`}
            >
              {category.category}

              {isActive && (
                <span className="hidden md:block absolute -bottom-[26px] left-1/2 -translate-x-1/2 w-8 h-0.5 bg-amber-400 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* META */}
      {currentCategory && (
        <p className="text-xs text-gray-500 mb-6 mt-4">
          {currentCategory.skills.length} tools
        </p>
      )}

      {/* GRID */}
      <AnimatePresence mode="wait">
        {currentCategory && (
          <motion.div
            key={currentCategory._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
          >
            {currentCategory.skills.map((skill, index) => (
              <motion.div
                key={skill._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.045, duration: 0.25 }}
                className="group flex flex-col items-center gap-2.5 bg-[#111110] border border-white/[0.07] rounded-2xl p-5 cursor-default transition-all duration-200 hover:border-amber-500/40 hover:bg-amber-500/[0.04] hover:-translate-y-0.5"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain transition-transform duration-200 group-hover:scale-110"
                />
                <span className="text-[12px] font-medium text-gray-500 group-hover:text-gray-200 text-center leading-tight transition-colors duration-200">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}