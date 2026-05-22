import AboutSection from "@/components/AboutSection";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
}
