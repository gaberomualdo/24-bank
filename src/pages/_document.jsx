import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <meta name="description" content="Hello world!" />
      </Head>
      <body className="da rk:bg-black flex h-full flex-col bg-zinc-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
