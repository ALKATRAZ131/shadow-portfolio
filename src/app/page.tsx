import { HeroSectionOne } from "@/components/HeroSectionOne";
import Navbar from "@/components/NavbarDemo";
import { getImageUrl } from "@/helpers";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSectionOne />
    </>
  );
}
