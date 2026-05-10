import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        {/*
          Google Analytics (GA4) — moved to _app.js with next/script strategy="lazyOnload"
          so it doesn't block FCP/LCP. Stub dataLayer + gtag here so any inline calls during
          render don't throw before the lazy script lands.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
            `,
          }}
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1B2A4A" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}