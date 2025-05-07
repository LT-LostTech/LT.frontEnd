import { useEffect, useState } from 'react';
import BiggerNewsCard from '../../../components/NewsCard/Bigger'
import * as S from './styled'
import { fetchFeaturedPosts } from '../../../services/api';
import { useFetch } from '../../../hooks/useFetch';

export default function MainNewsSection() {
    const { data: post, loading, error } = useFetch(() => fetchFeaturedPosts());
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);

console.log(post?.last_publication_date)

  useEffect(() => {
    if (
      post &&
      post.data.body[0].primary.display_main_title[0].text &&
      post.data.body[0].primary.display_main_image.url
    ) {
      const title = post.data.body[0].primary.display_main_title[0].text;
      const mainImage = post.data.body[0].primary.display_main_image.url;

      setTitle(title);
      setMainImage(mainImage);
    }
  }, [post, title, mainImage]);

  return (
    <S.MainNewsContainer>
        <BiggerNewsCard title={title || ''} image={mainImage || ''} altImage='Notícia principal mais recente'/>
        <S.MainNewsSideNews>

        </S.MainNewsSideNews>
    </S.MainNewsContainer>
  )
}
