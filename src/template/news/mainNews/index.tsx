import { useEffect, useState } from "react";
import BiggerNewsCard from "../../../components/NewsCard/Bigger";
import * as S from "./styled";
import { useFetch } from "../../../hooks/useFetch";
import { fetchFeaturedPosts } from "../../../services/api";
import { getRecentMainPost } from "../../../utils/MainRecentPost/getRecentPost";

export default function MainNewsSection() {
  const { data: posts, loading, error } = useFetch(() => fetchFeaturedPosts());
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);

  useEffect(() => {
    const mostRecentPost = getRecentMainPost(posts);

    if (mostRecentPost) {
      setMainImage(mostRecentPost.image);
      setTitle(mostRecentPost.title);
    }
  }, [posts]);

  return (
    <S.MainNewsContainer>
      <BiggerNewsCard
        title={title || ""}
        image={mainImage || ""}
        altImage="Notícia principal mais recente"
      />
      <S.MainNewsSideNews></S.MainNewsSideNews>
    </S.MainNewsContainer>
  );
}
