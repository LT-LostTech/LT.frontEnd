import { HeroTitleRoadmaps, StrongTitle } from "./styled";
import { Grid } from "../../../components/Grid";
import { useNavigate } from "react-router-dom";
import { buttonsRoadmaps } from "../GridButton/data";

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
        navigate={(index) => navigate(buttonsRoadmaps[index].path)}
      >
        {buttonsRoadmaps.map((button) => button.name)}
      </Grid>
    </>
  );
}
