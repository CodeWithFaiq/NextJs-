import MainLayout from '@/src/components/layout/main-layout'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  return(
    <>
    <SessionProvider> 
     <MainLayout> 
     <Component {...pageProps} />
    </MainLayout>
    </SessionProvider>
    </>
  )
}
