import { Button } from "../../components/Button";
import { Grid } from "../../template/Roadmaps/GridButton/styled";
import { HeroPageBackEnd } from "../../template/Roadmaps/Pages/HeroPages";
import { theme } from "../../theme/theme";
import { Linguages } from "./Linguages";
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
            <Grid>
                {
                    Linguages.map((Linguages,index)=>(
                        <Button key={index} width={"369px"} height={"81px"} colorText={`${theme.colors.white}`} bgColor={"transparent"} fontWeight={"600"} text={Linguages} border={`1px solid ${theme.colors.white}`}/>
                    ))
                }
            </Grid>
        </SectionPage>
    </>
  );
}
