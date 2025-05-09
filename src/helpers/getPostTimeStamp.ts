export const getPostTimeStamp = (post: any): number => 
    new Date(post.data.last_publication_date).getTime()

