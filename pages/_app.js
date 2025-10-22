import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#164A2C"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* Google Analytics (paste your GA ID below) */}
      <Script id="ga" strategy="afterInteractive">
        {`
          // Replace with your GA4 Measurement ID
          const GA_ID = window.GA_ID || 'G-XXXXXXXXXX';
          if (GA_ID && GA_ID !== 'G-XXXXXXXXXX') {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', GA_ID);
          }
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
