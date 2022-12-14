import Layout from '../components/Layout'
import { RiReactjsLine } from 'react-icons/ri'

export default function About() {
  return (
    <Layout>
      <div className='h-screen w-full bg-slate-100 flex flex-col items-center justify-center gap-4'>
        <p className='font-extrabold text-8xl text-stone-900 flex items-center gap-4'>
          <RiReactjsLine className='text-[200px] text-cyan-400' />
          <span className='text-8xl'>React</span>
        </p>
        <div className='font-extrabold text-slate-600 text-4xl'>useState</div>
      </div>
    </Layout>
  )
}
