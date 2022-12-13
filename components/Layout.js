import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className='flex flex-col max-w-[1200px] mx-auto px-6 gap-8 pt-12'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
