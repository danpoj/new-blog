import Layout from '../components/Layout'
import PostsContainer from '../components/PostsContainer'
import { PrismaClient } from '@prisma/client'
import PostingBtn from '../components/PostingBtn'

export default function Home({ posts }) {
  console.log(posts[0])
  return (
    <Layout>
      <PostingBtn />
      <PostsContainer posts={posts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const posts = await prisma.post.findMany()

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
    revalidate: 1,
  }
}
