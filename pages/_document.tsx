// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='np'>
      <Head>
        <meta name="description" content="Poudel family information" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/treant-js/1.0/Treant.css" />

        <Script id='raphael' src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.3.0/raphael.min.js" strategy={'beforeInteractive'} />
        <Script id='treant' src="https://cdnjs.cloudflare.com/ajax/libs/treant-js/1.0/Treant.min.js" strategy={'beforeInteractive'} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}