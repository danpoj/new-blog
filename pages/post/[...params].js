import Layout from '../../components/Layout'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// import dynamic from 'next/dynamic'
// import { forwardRef } from 'react'

// const TuiEditor = dynamic(() => import('../../components/PostEditor'), {
//   ssr: false,
// })

// const PostEditorForwardedRef = forwardRef((props, ref) => (
//   <TuiEditor {...props} forwardedRef={ref} />
// ))
// PostEditorForwardedRef.displayName = 'PostEditorForwardedRef'

export default function Post({ post }) {
  if (post === undefined) return <div>loading...</div>
  return (
    <Layout>
      <div className='flex flex-col items-center mt-4'>
        <p className='text-slate-500'>
          {new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(
            new Date(post.createdAt)
          )}
        </p>
        <h1 className='text-5xl font-bold text-slate-800 mt-4 mb-2'>
          {post.title}
        </h1>
        <h3 className='text-slate-600'>{post.summary}</h3>
      </div>
      <img
        className='h-[400px] w-full object-cover'
        src={post.coverImage}
        alt={post.slug}
      />
      <div
        className='markdown-body'
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const response = await prisma.post.findMany()
  const posts = JSON.parse(JSON.stringify(response))

  return {
    paths: posts.map((post) => ({
      params: {
        params: [post.id.toString(), post.slug],
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps(ctx) {
  const id = +ctx.params.params[0]

  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  })

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
    revalidate: 1,
  }
}
