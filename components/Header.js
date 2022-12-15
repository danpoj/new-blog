import Link from 'next/link'
import { RiGithubLine, RiInstagramLine } from 'react-icons/ri'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { useSession, signIn, signOut } from 'next-auth/react'
import { BiLogOut } from 'react-icons/bi'

export default function Header() {
  const { data: session } = useSession()
  console.log(session)

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
      <div className='flex gap-4 items-center'>
        <Link href='/tags' className='text-xl font-light'>
          tags
        </Link>
        <Link href='/about' className='text-xl font-light'>
          about
        </Link>

        {session ? (
          <button
            onClick={() => signOut()}
            className='flex items-center gap-1 border border-rose-600 rounded py-2 px-3'
          >
            <BiLogOut className='text-xl text-rose-600' />
            <span className='text-rose-600'>Logout</span>
          </button>
        ) : (
          <button
            onClick={() => signIn('google')}
            className='flex items-center gap-1 border border-cyan-600 rounded py-2 px-3'
          >
            <AiOutlineUserAdd className='text-xl text-cyan-600' />
            <span className='text-cyan-600'>Login</span>
          </button>
        )}
      </div>
    </div>
  )
}
