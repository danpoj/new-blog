import Footer from './Footer'
import Header from './Header'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  return (
    <div className='flex flex-col max-w-[800px] mx-auto px-3 gap-8 pt-12'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
