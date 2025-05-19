import { SmallerNewsProps } from "../../interfaces/interfaces.web";

export function getRecentSidePost(postData: any): SmallerNewsProps | null {
  if (!postData || !Array.isArray(postData?.data?.body)) return null;

  const slices = postData.data.body;

  const postFiltered = slices.filter(
    (post: any) =>
      post.primary.side_title_1 &&
      post.primary.side_image_1.url &&
      post.primary.side_title_2 &&
      post.primary.side_image_2.url 
  );

  const sortedPosts = postFiltered.sort(
    (a: any, b: any) =>
      new Date(b.primary.side_date_1).getTime() -
      new Date(a.primary.side_date_1).getTime()
  );

  const recentPost = sortedPosts[0];

  if (
    recentPost &&
    recentPost.primary.side_title_1[0].text &&
    recentPost.primary.side_image_1.url &&
    recentPost.primary.side_title_2[0].text &&
    recentPost.primary.side_image_2.url
  ) {
    return {
      titleOne: recentPost.primary.side_title_1[0].text,
      imageUrlOne: recentPost.primary.side_image_1.url,
      altImageOne: recentPost.primary.side_image_1.alt || "Notícia lateral mais recente",
      titleTwo: recentPost.primary.side_title_2[0].text,
      imageUrlTwo: recentPost.primary.side_image_2.url,
      altImageTwo: recentPost.primary.side_image_2.alt || "Notícia lateral mais recente",
    };
  }

  return null;
}
