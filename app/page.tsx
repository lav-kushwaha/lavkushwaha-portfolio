import Hero from "@/components/Hero";
import GithubGraph from "@/components/GithubGraph";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
     <Hero />
     <GithubGraph/>
     <ProjectSection title="Featured Projects" show={true} limit={3}/>
     <Skills/>
    </>
  );
}