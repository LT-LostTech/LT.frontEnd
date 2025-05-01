import * as prismic from '@prismicio/client'

const REPOSITORY = process.env.VITE_PRISMIC_REPOSITORY_NAME!
const ACCESS_TOKEN = process.env.VITE_PRISMIC_ACCESS_TOKEN!

export const client = prismic.createClient(REPOSITORY, {
  accessToken: ACCESS_TOKEN,
})