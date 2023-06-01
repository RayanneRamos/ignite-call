import '../lib/dayjs'
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Roboto } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

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
    <SessionProvider session={session}>
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
