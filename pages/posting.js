import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef, useRef } from 'react'
import Layout from '../components/Layout'
import { addPhoto } from '../lib/awsS3'
import { isRoot } from '../lib/isRoot'

const TuiEditor = dynamic(() => import('../components/PostEditor'), {
  ssr: false,
})

const PostEditorForwardedRef = forwardRef((props, ref) => (
  <TuiEditor {...props} forwardedRef={ref} />
))
PostEditorForwardedRef.displayName = 'PostEditorForwardedRef'

export default function Posting() {
  const imageRef = useRef()
  const tagRef = useRef()
  const slugRef = useRef()
  const summaryRef = useRef()
  const titleRef = useRef()
  const editorRef = useRef()
  const router = useRouter()

  const { data: session, status } = useSession()

  const editorImageHook = {
    addImageBlobHook: async (blob, callback) => {
      // if (!isRoot) return
      await addPhoto(slugRef.current.value, blob, callback)
    },
  }

  const onPost = async () => {
    if (
      imageRef.current.value === '' ||
      tagRef.current.value === '' ||
      slugRef.current.value === '' ||
      summaryRef.current.value === '' ||
      titleRef.current.value === ''
    ) {
      return
    }

    const ins = editorRef.current.getInstance()

    const postData = {
      coverImage: await addPhoto(
        slugRef.current.value,
        imageRef.current.files[0]
      ),
      tag: tagRef.current.value,
      slug: slugRef.current.value,
      summary: summaryRef.current.value,
      title: titleRef.current.value,
      content: ins.getHTML(),
    }
    try {
      const response = await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      })
      if (response.status !== 200) {
        console.log('something went wrong')
        //set an error banner here
      } else {
        // resetForm()
        console.log('form submitted successfully !!!')
        router.push('/')
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <h1 className='text-5xl font-bold'>????????? ??????</h1>

      {isRoot(session) ? null : (
        <p className='text-3xl text-red-500 font-bold underline'>
          ????????? ????????? ????????? ???????????? ??????????????? ????
        </p>
      )}

      <div>
        <h3>
          <span className='text-sm'>?????? ????????? </span>
          <span className='text-rose-500'>*</span>
        </h3>
        <input
          disabled={!isRoot(session)}
          ref={imageRef}
          className={` mt-2 font-bold`}
          type='file'
        />
      </div>

      <div>
        <h3>
          <span className='text-sm'>?????? </span>
          <span className='text-rose-500'>*</span>
        </h3>
        <input
          disabled={!isRoot(session)}
          ref={tagRef}
          type='text'
          className={`bg-[#fbfbfd] w-full rounded border h-[48px] mt-2 pl-6`}
          placeholder='?????? ????????????????'
        />
      </div>

      <div>
        <h3>
          <span className='text-sm'>????????? </span>
          <span className='text-rose-500'>*</span>
        </h3>
        <input
          disabled={!isRoot(session)}
          ref={slugRef}
          type='text'
          className={`bg-[#fbfbfd] w-full rounded border h-[48px] mt-2 pl-6`}
          placeholder='nextjs-ssg-ssr-csr'
        />
      </div>

      <div>
        <h3>
          <span className='text-sm'>?????? ?????? </span>
          <span className='text-rose-500'>*</span>
        </h3>
        <input
          disabled={!isRoot(session)}
          ref={summaryRef}
          type='text'
          className={`bg-[#fbfbfd] w-full rounded border h-[48px] mt-2 pl-6`}
          placeholder='???????????? ?????? ?????? ???????????????'
        />
      </div>

      <div>
        <h3>
          <span className='text-sm'>?????? </span>
          <span className='text-rose-500'>*</span>
        </h3>
        <input
          disabled={!isRoot(session)}
          ref={titleRef}
          type='text'
          className={`bg-[#fbfbfd] w-full rounded border h-[48px] mt-2 pl-6 `}
          placeholder='????????? ????????? ?????????'
        />
      </div>

      <div className=''>
        <h3 className='mb-2'>
          <span className='text-sm'>?????? </span>
          <span className='text-rose-500'>*</span>
        </h3>

        <PostEditorForwardedRef
          ref={editorRef}
          editorImageHook={editorImageHook}
        />
        <div className='flex gap-2 mt-9 mb-10'>
          <Link
            href='/'
            className='w-[100px] h-[44px] rounded font-bold text-lg flex items-center justify-center border bg-slate-50'
          >
            ??????
          </Link>
          <button
            disabled={!isRoot(session)}
            onClick={onPost}
            className={`w-[100px] h-[44px] rounded font-bold text-lg flex items-center justify-center border bg-slate-400 text-slate-50  `}
          >
            ??????
          </button>
        </div>
      </div>
    </Layout>
  )
}
