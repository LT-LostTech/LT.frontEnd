import { client } from "../prismic/prismic";

export const fetchNormalPosts = async () => {
  try {
    const blogPosts = await client.getSingle("blog_post");

    return { blogPosts };
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const fetchFeaturedPosts = async () => {
  try {
    const homepage = await client.getSingle("homepage");

    return homepage;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
