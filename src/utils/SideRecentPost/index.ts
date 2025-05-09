export function getRecentSidePost(postData: any) {
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
      sideTitleOne: recentPost.primary.side_title_1[0].text,
      sideImageOne: recentPost.primary.side_image_1.url,
      sideTitleTwo: recentPost.primary.side_title_2[0].text,
      sideImageTwo: recentPost.primary.side_image_2.url,
    };
  }

  return null;
}
