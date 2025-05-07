import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { fetchFeaturedPosts } from "../../services/api";
import { NewsContainer } from "./styled";
import BiggerNewsCard from "../../components/NewsCard/Bigger";
import SmallerNewsCard from "../../components/NewsCard/Smaller";
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
