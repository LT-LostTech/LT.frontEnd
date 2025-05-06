import { Grid } from "../../../components/Grid";
import { categories } from "./data";
import * as S from "./styled";

export default function HeroSectionNews() {
  return (
    <S.HeroSectionContainer>
      <S.HeroSectionTitle>
        Não perca às notícias da nossa sociedade{" "}
        <span className="highlight">&lt;/dev&gt;</span>
      </S.HeroSectionTitle>
      <Grid children={categories} columns={3} gap="32px" />
    </S.HeroSectionContainer>
  );
}
