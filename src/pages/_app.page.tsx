import '../lib/dayjs'
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Roboto } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { queryClient } from '../lib/react-query'
import { QueryClientProvider } from '@tanstack/react-query'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <div className={roboto.className}>
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </QueryClientProvider>
  )
}
