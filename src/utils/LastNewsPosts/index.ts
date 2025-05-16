import { PrismicDocument } from "@prismicio/client";
import { LastNewsProps } from "../../interfaces/interfaces.web";

export function getLastNews(
  postData: PrismicDocument | null
): LastNewsProps | null {
  if (!postData || !Array.isArray(postData?.data?.body)) return null;

  const slices = postData.data.body;

  const postFiltered = slices.filter(
    (post: any) =>
      post.primary.last_new_title_one &&
      post.primary.last_new_image_one &&
      post.primary.last_new_title_two &&
      post.primary.last_new_image_two &&
      post.primary.last_new_title_three &&
      post.primary.last_new_image_three
  );

  const sortedPosts = postFiltered.sort(
    (a: any, b: any) =>
      new Date(b.primary.last_new_date).getTime() -
      new Date(a.primary.last_new_date).getTime()
  );

  const recentPost = sortedPosts[0];

  if (
    recentPost &&
    recentPost.primary.last_new_title_one[0].text &&
    recentPost.primary.last_new_image_one &&
    recentPost.primary.last_new_title_two[0].text &&
    recentPost.primary.last_new_image_two &&
    recentPost.primary.last_new_title_three[0].text &&
    recentPost.primary.last_new_image_three
  ) {
    return {
      titleOne: recentPost.primary.last_new_title_one[0].text,
      imageUrlOne: recentPost.primary.last_new_image_one.url,
      altImageOne: recentPost.primary.last_new_image_one.alt,
      titleTwo: recentPost.primary.last_new_title_two[0].text,
      imageUrlTwo: recentPost.primary.last_new_image_two.url,
      altImageTwo: recentPost.primary.last_new_image_two.alt,
      titleThree: recentPost.primary.last_new_title_three[0].text,
      imageUrlThree: recentPost.primary.last_new_image_three.url,
      altImageThree: recentPost.primary.last_new_image_three.alt,
    };
  }

  return null;
}
