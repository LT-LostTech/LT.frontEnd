import { HeroStrongTitleRoadmaps, HeroTitleRoadmaps } from "./styled";
import { Grid } from "../../../components/Grid";
import { buttons } from "../GridButton/data";

export function HeroRoadmaps() {
  return (
    <>
      <HeroTitleRoadmaps>
        Encontre o seu caminho na{" "}
        <HeroStrongTitleRoadmaps>{"</tecnologia>"}</HeroStrongTitleRoadmaps>!
      </HeroTitleRoadmaps>

      <Grid columns={3} gap={"32px"} children={buttons} />
    </>
  );
}
