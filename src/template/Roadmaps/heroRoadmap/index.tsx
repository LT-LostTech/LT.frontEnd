import { Button } from "../../../components/Button"
import { theme } from "../../../theme/theme"
import { buttons } from "../GridButton"
import { ButtonsStyledRoadmaps, Grid } from "../GridButton/styled"
import { HeroStrongTitleRoadmaps, HeroTitleRoadmaps} from "./styled"

export function HeroRoadmaps() {

    return (
       <>
            <HeroTitleRoadmaps>
                 Encontre o seu caminho na <HeroStrongTitleRoadmaps>{'</tecnologia>'}</HeroStrongTitleRoadmaps>!
            </HeroTitleRoadmaps>

            <Grid>

                {buttons.map(buttons => (
                    <ButtonsStyledRoadmaps>

                        <Button key={buttons} width={`365px`} height={`81px`} colorText={`${theme.colors.white}`} bgColor={"transparent"} fontWeight={"600"} text={buttons} border={`1px solid ${theme.colors.white}`} />
                        
                    </ButtonsStyledRoadmaps>
                    )
                )}
            </Grid>
            </>
            

       
            
     


    )
}