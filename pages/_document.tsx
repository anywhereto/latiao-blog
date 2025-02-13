import { Html, Head, Main, NextScript } from 'next/document'
import siteMetadata from '@/data/siteMetadata'

export default function Document() {
  return (
    <Html lang={siteMetadata.language}>
      <Head>
        <meta name="google-site-verification" content="ZxcyAtlW9w-boKQomUXl4sOyJYYQdcg5hXh-sDcBr9o" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      </Head>
      <body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 