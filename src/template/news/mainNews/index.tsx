import { useEffect, useState } from "react";
import BiggerNewsCard from "../../../components/NewsCard/Bigger";
import * as S from "./styled";
import { useFetch } from "../../../hooks/useFetch";
import { fetchFeaturedPosts } from "../../../services/api";
import { getRecentMainPost } from "../../../utils/MainRecentPost/index.";
import SmallerNewsCard from "../../../components/NewsCard/Smaller";
import { getRecentSidePost } from "../../../utils/SideRecentPost";

export default function MainNewsSection() {
  const { data: posts, loading, error } = useFetch(() => fetchFeaturedPosts());
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [mainTitle, setMainTitle] = useState<string | null>(null);
  const [sideTitleOne, setSideTitleOne] = useState<string | null>(null);
  const [sideImageOne, setSideImageOne] = useState<string | null>(null);
  const [sideTitleTwo, setSideTitleTwo] = useState<string | null>(null);
  const [sideImageTwo, setSideImageTwo] = useState<string | null>(null);

  console.log("posts", posts);

  useEffect(() => {
    const mostRecentMainPost = getRecentMainPost(posts);
    const mostrecentSidePost = getRecentSidePost(posts)

    if (mostRecentMainPost) {
      setMainImage(mostRecentMainPost.image);
      setMainTitle(mostRecentMainPost.title);
    }
    
    if (mostrecentSidePost) {
      setSideImageOne(mostrecentSidePost.sideImageOne);
      setSideTitleOne(mostrecentSidePost.sideTitleOne);
      setSideImageTwo(mostrecentSidePost.sideImageTwo);
      setSideTitleTwo(mostrecentSidePost.sideTitleTwo);
    }

  }, [posts]);

  return (
    <S.MainNewsContainer>
      <BiggerNewsCard
        title={mainTitle || ""}
        image={mainImage || ""}
        altImage="Notícia principal mais recente"
      />
      <S.MainNewsSideNews>
        <SmallerNewsCard image={sideImageOne || ''} title={sideTitleOne || ''} altImage='Primeira Notícia do site side'/>
        <SmallerNewsCard image={sideImageTwo || ''} title={sideTitleTwo || ''} altImage='Segunda Notícia do site side'/>
      </S.MainNewsSideNews>
    </S.MainNewsContainer>
  );
}
