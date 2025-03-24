import { HeroSection } from "../../template/HeroSection";
import { SectionIllustration } from "../../template/SectionIllustration";
import { sections } from "./data";

export function Landpage() {
  return (
    <>
      <HeroSection />
      {sections.map((section, key) => (
        <SectionIllustration
          key={key}
          layout={section.layout as "left" | "right"}
          title={section.title}
          description={section.description}
          image={section.image}
          textButton={section.textButton}
          backgroundImage={section.backgroundImage as "black" | "white"}
          colorButton={section.colorButton}
        />
      ))}
    </>
  );
}
