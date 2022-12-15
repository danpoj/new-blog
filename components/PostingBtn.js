import Link from 'next/link'
import React from 'react'
import { TbBook2 } from 'react-icons/tb'

const PostingBtn = () => {
  return (
    <Link
      href='/posting'
      className='w-[120px] h-[50px] rounded font-bold text-lg flex gap-1 items-center justify-center border border-slate-600 text-slate-700'
    >
      <TbBook2 className='text-xl' />
      <span>작성하기</span>
    </Link>
  )
}

export default PostingBtn
