import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'


export default function Document() {
  const meta = {
    title: 'Doni Wirawan Personal Website',
    description: 'CS Student | Web Developer | 20',
    image: '/images/potrait.jpg'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="google-site-verification" content="bLGNOg9yVKEXXtq7xBH5_OmAOjYh5Yg4WZ9r_6euA7A" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@doni_wirawans" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
