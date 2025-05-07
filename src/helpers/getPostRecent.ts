import { fetchFeaturedPosts } from "../services/api"

const getPostTimeStamp = (post: any): number => 
    new Date(post.data.last_publication_date).getTime()


export const getPostRecent = async () => {
   const posts = await fetchFeaturedPosts()

   if (!Array.isArray(posts)) return null

   const sortedPosts = posts.filter((post) => post.data.last_publication_date).sort((a, b) => {
      return getPostTimeStamp(b) - getPostTimeStamp(a)
   })

   const mostRecentPost = sortedPosts[0]

   return mostRecentPost
}