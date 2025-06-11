import { useEffect, useState } from "react";
import BiggerNewsCard from "../../../components/NewsCard/Bigger";
import * as S from "./styled";
import { useFetch } from "../../../hooks/useFetch";
import { fetchFeaturedPosts } from "../../../services/prismic/api";
import { getRecentMainPost } from "../../../utils/MainRecentPost/index.";
import SmallerNewsCard from "../../../components/NewsCard/Smaller";
import { getRecentSidePost } from "../../../utils/SideRecentPost";
import { BiggerNewsProps, SmallerNewsProps } from "../../../interfaces/interfaces.web";

export default function MainNewsSection() {
  const { data: posts } = useFetch(() => fetchFeaturedPosts());
  const [biggerNews, setBiggerNews] = useState<BiggerNewsProps | null>(null);
  const [SmallerNews, setSmallerNews] = useState<SmallerNewsProps | null>(null);

  useEffect(() => {
    const mainNews = getRecentMainPost(posts) as BiggerNewsProps | null;
    const sideNews = getRecentSidePost(posts) as SmallerNewsProps | null;

    if (mainNews) {
      setBiggerNews({
        title: mainNews.title,
        imageUrl: mainNews?.imageUrl,
        altImage: mainNews.altImage
      });
    }
    
    if (sideNews) {
      setSmallerNews(
        {
          titleOne: sideNews.titleOne,
          imageUrlOne: sideNews.imageUrlOne,
          altImageOne: sideNews.altImageOne, 
          titleTwo: sideNews.titleTwo,
          imageUrlTwo: sideNews.imageUrlTwo,
          altImageTwo: sideNews.altImageTwo
        }
      )
    }

  }, [posts]);

  return (
    <S.MainNewsContainer>
      <BiggerNewsCard
        title={biggerNews?.title || ""}
        image={biggerNews?.imageUrl || ""}
        altImage={biggerNews?.altImage || "Notícia principal"}
      />
      <S.MainNewsSideNews>
        <SmallerNewsCard image={SmallerNews?.imageUrlOne || ''} title={SmallerNews?.titleOne || ""} altImage={SmallerNews?.altImageTwo || ""}/>
        <SmallerNewsCard image={SmallerNews?.imageUrlTwo || ""} title={SmallerNews?.titleTwo || ""} altImage={SmallerNews?.altImageTwo || ""}/>
      </S.MainNewsSideNews>
    </S.MainNewsContainer>
  );
}
