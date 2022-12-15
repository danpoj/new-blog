import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

// code highlight plugin
import 'prism-themes/themes/prism-one-light.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
