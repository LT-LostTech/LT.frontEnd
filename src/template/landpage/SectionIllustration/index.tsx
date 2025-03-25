import React from "react";
import { Button } from "../../../components/Button";
import { theme } from "../../../theme/theme";
import {
  SectionIllustrationContainer,
  SectionIllustrationContent,
  SectionIllustrationDescription,
  SectionIllustrationImage,
  SectionIllustrationTitle,
} from "./styled";

interface SectionIllustrationProps {
  layout: "left" | "right";
  title: string;
  description: React.ReactNode;
  image: string;
  textButton: string;
  colorButton: string;

  backgroundImage: "black" | "white";
}

export function SectionIllustration({
  layout,
  title,
  description,
  image,
  textButton,
  colorButton,
  backgroundImage,
}: SectionIllustrationProps) {
  return (
    <SectionIllustrationContainer layout={layout} backgroundImage={backgroundImage}>
      <SectionIllustrationContent>
        <SectionIllustrationTitle backgroundImage={backgroundImage} layout={layout}>{title}</SectionIllustrationTitle>
        <SectionIllustrationDescription backgroundImage={backgroundImage} layout={layout}>
          {description}
        </SectionIllustrationDescription>
        <Button
          text={textButton}
          width="100%"
          height="84px"
          colorText={colorButton === "white" ? theme.colors.black : theme.colors.white}
          bgColor={colorButton === "white" ? theme.colors.white : theme.colors.black && backgroundImage === "white" ? theme.colors.black : theme.colors.white}
          fontWeight="bold"
          border="none"
        />
      </SectionIllustrationContent>
      <SectionIllustrationImage
        src={image}
        alt="Imagem que é relacionada ao conteúdo da seção"
      />
    </SectionIllustrationContainer>
  );
}
