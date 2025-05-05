import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { fetchFeaturedPosts } from "../../services/api";
import { NewsContainer } from "./styled";
import BiggerNewsCard from "../../components/NewsCard/Bigger";

export default function News() {
  const { data: post, loading, error } = useFetch(() => fetchFeaturedPosts());
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);

  useEffect(() => {
    if (post && post.data.body[0].primary.display_main_title[0].text && post.data.body[0].primary.display_main_image.url) {
      const title = post.data.body[0].primary.display_main_title[0].text;
      const mainImage = post.data.body[0].primary.display_main_image.url;

      setTitle(title);
      setMainImage(mainImage);
    }
  }, [post, title, mainImage]);

  return (
    <NewsContainer>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {post && (
        <BiggerNewsCard altImage="blbdsajdsa" image={mainImage || ""} title="toma titulo thiagooooo"></BiggerNewsCard>
      )}
    </NewsContainer>
  );
}
