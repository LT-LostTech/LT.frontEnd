import { HeroDescription, HeroSectionContainer, HeroTitle} from "./styled";
import { Button } from "../../components/Button";
import { theme } from "../../theme/theme";

export function HeroSection() {
    return (
        <HeroSectionContainer>
            <HeroTitle>
                TECNOLOGIA PARECE UM LABIRINTO?
            </HeroTitle>
            <HeroTitle>
                NÓS TEMOS O MAPA
            </HeroTitle>
            <HeroDescription>
                A LostTech ajuda você a navegar no mundo tech com roadmaps estruturados, desafios e notícias atualizadas
            </HeroDescription>
            <Button width="660px" height="84px" colorText="white" bgColor={theme.colors.gray800} border="transparent" fontWeight="600" text="Comece agora!" />
        </HeroSectionContainer>

    )
}