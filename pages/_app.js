import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import Script from 'next/script'
import '../styles/main.css'
import Comment from './_comment'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-K3SYFGNC9W`} />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-K3SYFGNC9W', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
      <Comment />
    </>
  )
}
