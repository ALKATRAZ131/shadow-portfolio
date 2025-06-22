"use client";

import { HeroSectionOne } from "@/components/HeroSectionOne";
import HireMeSection from "@/components/HireMeSection";
import MyProjectsSection from "@/components/MyProjectsSection";
import MySkillsSection from "@/components/MySkillsSection";
import Navbar from "@/components/NavbarDemo";
import SkillScroller from "@/components/SkillScroller";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSectionOne />
      <SkillScroller />
      <MySkillsSection />
      <MyProjectsSection />
      <HireMeSection />
    </>
  );
}
