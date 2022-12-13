import Link from 'next/link'
import { RiGithubLine, RiInstagramLine } from 'react-icons/ri'

export default function Footer() {
  return (
    <div className='flex flex-col gap-2 mb-6 justify-end h-40'>
      <div className='flex gap-3 items-end'>
        <Link href='/'>
          <h1 className='text-2xl font-bold text-slate-800'>DanPoJ</h1>
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
      <p className='text-sm text-stone-500'>© 2022 Danpoj.</p>
    </div>
  )
}
