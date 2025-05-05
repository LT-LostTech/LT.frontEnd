import * as S from "./styled";

interface BiggerNewsCardProps {
  altImage: string;
  image: string;
  title: string;
}

export default function BiggerNewsCard({
  altImage,
  image,
  title,
}: BiggerNewsCardProps) {
  return (
    <S.BiggerNewsCardContainer>
      <S.BiggerNewsCardImage alt={altImage} src={image} />
      <S.BiggerNewsCardTextContainer>
        <S.BiggerNewsCardTitle>{title}</S.BiggerNewsCardTitle>
      </S.BiggerNewsCardTextContainer>
    </S.BiggerNewsCardContainer>
  );
}
