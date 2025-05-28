import { HeroSection } from "../../template/landpage/HeroSection";
import { SectionIllustration } from "../../template/landpage/SectionIllustration";
import { sections } from "./data";
import { SectionWithIllustrationContainer } from "./styled";

export function Landpage() {
  return (
    <>
      <HeroSection />
      <SectionWithIllustrationContainer>
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
      </SectionWithIllustrationContainer>
      
    </>
  );
}
