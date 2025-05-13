import { PrismicDocument } from "@prismicio/client";
import { BiggerNewsProps } from "../../interfaces/interfaces.web";

export function getRecentMainPost(postData: PrismicDocument | null): BiggerNewsProps | null {
        if (!postData || !Array.isArray(postData?.data?.body)) return null;
      
        const slices = postData.data.body;
      
        const postFiltered = slices.filter(
          (post: any) =>
            post.primary.display_main_title &&
            post.primary.display_main_image?.url &&
            post.primary.display_main_date
        );
      
        const sortedPosts = postFiltered.sort(
          (a: any, b: any) =>
            new Date(b.primary.display_main_date).getTime() -
            new Date(a.primary.display_main_date).getTime()
        );
      
        const recentPost = sortedPosts[0];
      
        if (
          recentPost &&
          recentPost.primary.display_main_title?.[0]?.text &&
          recentPost.primary.display_main_image?.url
        ) {
          return {
            title: recentPost.primary.display_main_title[0].text,
            imageUrl: recentPost.primary.display_main_image.url,
            altImage: recentPost.primary.display_main_image.alt || "Notícia principal mais recente",
          };
        }
      
        return null;
}