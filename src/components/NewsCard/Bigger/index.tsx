import { NewsCardProps } from "../../../interfaces/interfaces.web";
import * as S from "./styled";

export default function BiggerNewsCard({
  altImage,
  image,
  title,
}: NewsCardProps) {
  return (
    <S.BiggerNewsCardContainer>
      <S.BiggerNewsCardImage alt={altImage} src={image} />
      <S.BiggerNewsCardTextContainer>
        <S.BiggerNewsCardTitle>{title}</S.BiggerNewsCardTitle>
      </S.BiggerNewsCardTextContainer>
    </S.BiggerNewsCardContainer>
  );
}
