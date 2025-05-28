import { useEffect, useState } from "react";
import SmallerNewsCard from "../../../components/NewsCard/Smaller";
import * as S from "./styled";
import { useFetch } from "../../../hooks/useFetch";
import { getLastNews } from "../../../utils/LastNewsPosts";
import { LastNewsProps } from "../../../interfaces/interfaces.web";
import { fetchFeaturedPosts } from "../../../services/prismic/api";

export default function LastNews() {
  const { data: posts, error, loading } = useFetch(() => fetchFeaturedPosts());
  const [lastNews, setLastNews] = useState<LastNewsProps | null>(null);

  console.log(lastNews);

  useEffect(() => {
    const lastNews = getLastNews(posts) as LastNewsProps | null;

    if (lastNews) {
      setLastNews({
        titleOne: lastNews.titleOne,
        imageUrlOne: lastNews.imageUrlOne,
        altImageOne: lastNews.altImageOne,
        titleTwo: lastNews.titleTwo,
        imageUrlTwo: lastNews.imageUrlTwo,
        altImageTwo: lastNews.altImageTwo,
        titleThree: lastNews.titleThree,
        imageUrlThree: lastNews.imageUrlThree,
        altImageThree: lastNews.altImageThree,
      });
    }
  }, [posts]);

  return (
    <S.LastNewsSection>
      <S.LastNewsTitle>Últimas notícias</S.LastNewsTitle>
      <S.LastNewsContainer>
        <SmallerNewsCard title={lastNews?.titleOne || ""} image={lastNews?.imageUrlOne || ""} altImage={lastNews?.altImageOne || "Notícia mais recente"}/>
        <SmallerNewsCard title={lastNews?.titleTwo || ""} image={lastNews?.imageUrlTwo || ""} altImage={lastNews?.altImageTwo || "Notícia mais recente"}/>
        <SmallerNewsCard title={lastNews?.titleThree || ""} image={lastNews?.imageUrlThree || ""} altImage={lastNews?.altImageThree || "Notícia mais recente"}/>
      </S.LastNewsContainer>
    </S.LastNewsSection>
  );
}
