import Image from "next/image";
import HeroSection from "./Hero";
import Cards from "./Components/Cards";
import ProjectSection from "./Components/Project";
import OurJourney from "./journey";
import HexagonSection from "./whychoose";
import ProjectIdeaForm from "@/app/Components/Form";

export default function Home() {
  return (
    <>
<HeroSection/>
<Cards/>
          <ProjectSection/>
          <OurJourney/>
          <HexagonSection/>
          <ProjectIdeaForm />
          
    </>
  );
}
