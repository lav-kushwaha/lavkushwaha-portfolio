"use client";

import { useState, useEffect } from "react";
import { skillsData } from "@/constants/skills";
import Image from "next/image";


export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    if (skillsData.length > 0) {
      setActiveCategory(skillsData[0]._id);
    }
  }, []);

  const currentCategory = skillsData.find(
    (cat) => cat._id === activeCategory
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      
      {/* Title */}
      <h1 className="text-5xl md:text-8xl font-bold mb-12">
        Skills
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {skillsData.map((category) => (
          <button
            key={category._id}
            onClick={() => setActiveCategory(category._id)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeCategory === category._id
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      {currentCategory && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {currentCategory.skills.map((skill) => (
            <div
              key={skill._id}
              className="flex flex-col items-center bg-white border rounded-lg shadow p-4 hover:scale-105 transition"
            >
              <div className="w-12 h-12 mb-2">
                <Image
                src={skill.icon}
                alt={skill.name}
                width={48}
                height={48}
                />
              </div>
              <span className="text-sm font-medium text-black">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}