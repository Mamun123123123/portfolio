import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectSection />
    </div>
  );
}
