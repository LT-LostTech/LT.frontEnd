import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { fetchFeaturedPosts } from "../../services/api";
import { NewsContainer } from "./styled";

export default function News() {
  const { data: post, loading, error } = useFetch(() => fetchFeaturedPosts());
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);

  useEffect(() => {
    if (post) {
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
      <div style={{ textAlign: "center" }}>
        <img
          style={{ width: "100%", height: "auto" }}
          src={mainImage || ""}
          alt={title || ""}
        />
        <h1 style={{ color: "#333" }}>{title}</h1>
      </div>
    </NewsContainer>
  );
}
