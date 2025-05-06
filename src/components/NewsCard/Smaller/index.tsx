import {  NewsCardProps } from "../../../interfaces/interfaces.web";
import * as S from "./styled";



export default function SmallerNewsCard({
  altImage,
  image,
  title,
}: NewsCardProps) {
  return (
    <S.SmallerNewsCardContainer>
      <S.SmallerNewsCardImage alt={altImage} src={image} />
      <S.SmallerNewsCardTextContainer>
        <S.SmallerNewsCardTitle>{title}</S.SmallerNewsCardTitle>
      </S.SmallerNewsCardTextContainer>
    </S.SmallerNewsCardContainer>
  );
}
