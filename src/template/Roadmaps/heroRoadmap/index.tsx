import { HeroTitleRoadmaps, StrongTitle } from "./styled";
import { Grid } from "../../../components/Grid";
import { useNavigate } from "react-router-dom";
import { buttons } from "../GridButton/data";

export function HeroRoadmaps() {
  const navigate = useNavigate();

  return (
    <>
      <HeroTitleRoadmaps>
        Encontre o seu caminho na <StrongTitle>{"</tecnologia>"}</StrongTitle>!
      </HeroTitleRoadmaps>

      <Grid
        columns={3}
        gap={"32px"}
        children={buttons.map((button) => button)}
        navigate={(index) => navigate(buttons[index])}
      />
    </>
  );
}
