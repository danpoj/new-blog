import Link from 'next/link'
import Layout from '../components/Layout'
import { TbBook2 } from 'react-icons/tb'
import PostsContainer from '../components/PostsContainer'
import { PrismaClient } from '@prisma/client'

export default function Home({ posts }) {
  return (
    <Layout>
      <Link
        href='/posting'
        className='w-[120px] h-[50px] rounded font-bold text-lg flex gap-1 items-center justify-center border border-slate-600 text-slate-700'
      >
        <TbBook2 className='text-xl' />
        <span>작성하기</span>
      </Link>
      <PostsContainer posts={posts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const response = await prisma.post.findMany()

  const posts = JSON.parse(JSON.stringify(response))

  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}
