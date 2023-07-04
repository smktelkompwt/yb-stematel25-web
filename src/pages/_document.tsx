import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gradient-to-br from-slate-800 to-slate-900 antialiased text-slate-50 bg-no-repeat'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
