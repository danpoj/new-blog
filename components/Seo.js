import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Seo() {
  const router = useRouter()

  return (
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta name='robots' content='follow, index' />
      <meta
        name='keywords'
        content='danpoj, 장원석, jws970306, 개발블로그, blog, Frontend'
      />
      <meta
        name='description'
        content='Engineering Blog by Danpoj, Front-end developer'
      />
      <meta name='author' content='danpoj' />
      <meta property='og:title' content='danpoj' />
      <meta property='og:decription' content='Engineering Blog by Danpoj' />
      <meta
        property='og:image'
        content='https://user-images.githubusercontent.com/88086373/198500987-c73d7441-75b3-44d9-aed3-97ed443053b2.png'
      />

      {/* og */}
      <meta property='og:image:width' content='1200' />
      <meta property='og:site_name' content='Danpoj' />
      <meta property='og:image:height' content='630' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://danpoj.xyz/' />

      {/* twitter */}
      <meta property='twitter:card' content='summary' />
      <meta property='twitter:title' content='danpoj' />
      <meta
        property='twitter:description'
        content='Engineering Blog by Danpoj'
      />
      <meta
        property='twitter:image'
        content='https://user-images.githubusercontent.com/88086373/198500987-c73d7441-75b3-44d9-aed3-97ed443053b2.png'
      />
      <title>
        {router.asPath === '/'
          ? 'DanPoJ'
          : 'DanPoJ / ' +
            router.asPath.slice(router.asPath.lastIndexOf('/') + 1)}
      </title>
    </Head>
  )
}
