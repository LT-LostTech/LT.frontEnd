import { Grid } from "../../../components/Grid";
import { HeroPageBackEnd } from "../../../template/Roadmaps/Pages/HeroPages";
import { Linguages } from "./data";
import { SectionGroup, SectionPage, TitleOfSection } from "./styled";

export function RoadmapPages() {
  return (
    <>
      <SectionGroup>
        <HeroPageBackEnd />
      </SectionGroup>
      <SectionPage>
            <TitleOfSection>
            Linguagens de programação
            </TitleOfSection>
            <Grid columns={3} gap={"32px"} children={Linguages}>
            </Grid>
        </SectionPage>
    </>
  );
}
