import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="stylesheet" href="/css/tailwind.css" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.4/css/all.css" />
      </Head>
      <body data-theme="default" className="min-h-screen bg-gradient-to-t from-white-text to-rain dark:from-scary-dark dark:to-bg">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}