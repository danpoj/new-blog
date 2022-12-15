import Link from 'next/link'
import { RiGithubLine, RiInstagramLine } from 'react-icons/ri'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { useSession, signIn, signOut } from 'next-auth/react'
import { BiLogOut } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { truncName } from '../lib/truncName'
import { useState } from 'react'

export default function Header() {
  const { data: session, status } = useSession()
  const [isMenuModal, setIsMenuModal] = useState(false)

  return (
    <div className='flex justify-between items-center'>
      {/* header - left */}
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

      {/* header - right - desktop */}
      <div className='hidden sm:flex gap-4 items-center'>
        <Link href='/tags' className='text-lg font-light'>
          Category
        </Link>
        <Link href='/about' className='text-lg font-light'>
          About
        </Link>

        {status === 'authenticated' ? (
          <div className='flex  items-center gap-1'>
            <img
              className='w-6 h-6 rounded-full ml-2 mr-1'
              src={session.user.image}
              alt='login user img'
              referrerPolicy='no-referrer'
            />
            <span className='text-xs'>{truncName(session.user.name)}</span>

            <button
              onClick={() => signOut()}
              className='flex items-center gap-1'
            >
              <BiLogOut className=' text-rose-600' />
              <span className='text-rose-600 text-sm'>Logout</span>
            </button>
          </div>
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

      {/* header - right - mobile */}
      <button
        onClick={() => setIsMenuModal((prev) => !prev)}
        className=' sm:hidden'
      >
        <GiHamburgerMenu className='text-2xl' />
      </button>
      {isMenuModal ? (
        <div className='w-60 shadow-xl bg-white absolute right-[10px] top-24 rounded-xl flex flex-col p-2 border border-slate-300'>
          <Link
            href='/tags'
            className='text-slate-800 bg-white w-full rounded-xl text-center py-3 hover:bg-slate-100'
          >
            🌱 Category
          </Link>
          <Link
            href='/about'
            className='text-slate-800 bg-white w-full rounded-xl text-center py-3  hover:bg-slate-100'
          >
            👋 About
          </Link>
          <hr className='mt-2 mb-4' />
          {status === 'authenticated' ? (
            <>
              <div className='flex items-center justify-center gap-2'>
                <img
                  className='rounded-lg w-8 h-8'
                  src={session.user.image}
                  alt='user img'
                  referrerPolicy='no-referrer'
                />
                <span className='text-sm'>{truncName(session.user.name)}</span>
              </div>
              <button
                onClick={() => signOut()}
                className='text-rose-500  w-full rounded-xl text-center py-2 flex gap-1 justify-center hover:text-white hover:bg-rose-400 items-center  mt-3'
              >
                <BiLogOut className='text-lg' />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <div>
              <button
                onClick={() => signIn('google')}
                className='text-cyan-500  w-full rounded-xl text-center py-2 flex gap-1 justify-center hover:text-white hover:bg-cyan-300 items-center'
              >
                <BiLogOut className='text-lg' />
                <span>Login</span>
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}
