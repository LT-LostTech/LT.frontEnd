import { NewsContainer } from "./styled";
import HeroSectionNews from "../../template/news/HeroSection";
import MainNewsSection from "../../template/news/mainNews";
import LastNews from "../../template/news/lastNews";

export default function News() {
  return (
    <NewsContainer>
      <HeroSectionNews />
      <MainNewsSection />
      <LastNews />
    </NewsContainer>
  );
}
