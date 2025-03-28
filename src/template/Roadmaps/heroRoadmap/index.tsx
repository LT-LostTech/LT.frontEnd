import { Button } from "../../../components/Button"
import { theme } from "../../../theme/theme"
import { buttons } from "../GridButton"
import { Grid } from "../GridButton/styled"
import { HeroRoadmapsContainer, HeroStrongTitleRoadmaps, HeroTitleRoadmaps } from "./styled"

export function HeroRoadmaps(){

    return (
        <HeroRoadmapsContainer>
            <HeroTitleRoadmaps>
            Encontre o seu caminho na <HeroStrongTitleRoadmaps>{'</tecnologia>'}</HeroStrongTitleRoadmaps>!
            </HeroTitleRoadmaps>
            <Grid>
            {
            buttons.map(buttons => (
                
                <Button key={buttons} width={`369px`} height={`81px`} colorText={`${theme.colors.white}`} bgColor={"transparent"} fontWeight={"600"} text={buttons} border={`1px solid ${theme.colors.white}`}/>
            )
            )}
            </Grid>
        </HeroRoadmapsContainer>

    )
}