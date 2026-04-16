import ProjectSection from "@/components/ProjectSection";

export default function ProjectsPage() {
  return (
    <div className="bg-black text-white">

      {/* Header */}
      <div className="max-w-6xl mt-15 mx-auto px-6 text-center py-16">
        
        <h1 className="text-5xl sm:text-5xl md:text-8xl lg:text-8xl font-playfair font-bold mb-6">
          Projects
        </h1>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          A collection of my work, including web apps, design projects,
          and creative experiments showcasing my skills and ideas.
        </p>

      </div>

      {/* Projects Section */}
      <ProjectSection title="Web Projects" />

    </div>
  );
}