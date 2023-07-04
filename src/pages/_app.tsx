import '@/styles/globals.css'
import '@/styles/nprogress.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { SessionProvider } from 'next-auth/react'
import NProgress from '@/components/NProgress'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <NProgress />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
