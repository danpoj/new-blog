import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <div className='h-screen w-full bg-yellow-200 flex flex-col items-center justify-center gap-4'>
        <p className='font-extrabold text-8xl text-slate-700'>Js</p>
        <div className='font-extrabold text-stone-700 text-5xl'>
          var, let, const
        </div>
      </div>
    </Layout>
  )
}
