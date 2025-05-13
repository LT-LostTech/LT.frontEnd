import { NewsContainer } from "./styled";
import HeroSectionNews from "../../template/news/HeroSection";
import MainNewsSection from "../../template/news/mainNews";

export default function News() {
  return (
    <NewsContainer>
      <HeroSectionNews />
      <MainNewsSection />
    </NewsContainer>
  );
}
