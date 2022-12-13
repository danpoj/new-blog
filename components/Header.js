import Link from 'next/link'
import { RiGithubLine, RiInstagramLine } from 'react-icons/ri'

export default function Header() {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-4'>
        <Link href='/' className='text-3xl font-bold text-slate-800'>
          DanPoJ
        </Link>
        <div className='flex text-2xl gap-1'>
          <a href='https://github.com/danpoj' className='hover:text-slate-500'>
            <RiGithubLine />
          </a>
          <a
            href='https://www.instagram.com/danpoj_/'
            className='hover:text-fuchsia-500'
          >
            <RiInstagramLine />
          </a>
        </div>
      </div>
      <div className='flex gap-4'>
        <Link href='/tags' className='text-xl font-light'>
          tags
        </Link>
        <Link href='/about' className='text-xl font-light'>
          about
        </Link>
      </div>
    </div>
  )
}
