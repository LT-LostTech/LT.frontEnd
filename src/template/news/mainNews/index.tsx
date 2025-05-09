import { useEffect, useState } from "react";
import BiggerNewsCard from "../../../components/NewsCard/Bigger";
import * as S from "./styled";
import { useFetch } from "../../../hooks/useFetch";
import { fetchFeaturedPosts } from "../../../services/api";

export default function MainNewsSection() {
  const { data: posts, loading, error } = useFetch(() => fetchFeaturedPosts());
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);

  useEffect(() => {
    if (!posts || !Array.isArray(posts?.data?.body)) return;

    const slices = posts.data.body;

    const postFiltered = slices.filter(
      (post) =>
        post.primary.display_main_title &&
        post.primary.display_main_image.url &&
        post.primary.display_main_date
    );

    const sortedPosts = postFiltered.sort(
      (a, b) =>
        new Date(b?.primary.display_main_date).getTime() -
        new Date(a?.primary.display_main_date).getTime()
    );

    const recentPost = sortedPosts[0];

    if (
      recentPost &&
      recentPost.primary.display_main_title[0].text &&
      recentPost.primary.display_main_image.url
    ) {
      setTitle(recentPost.primary.display_main_title[0].text);
      setMainImage(recentPost.primary.display_main_image.url);
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
