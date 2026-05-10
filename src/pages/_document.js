import { Html, Head, Main, NextScript } from 'next/document';
// import Script from 'next/script'; // This import is not strictly necessary if you only use standard <script> tags in _document.js

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        {/* Google tag (gtag.js) scripts */}
        {/* This script loads the Google tag manager library asynchronously */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-SK66D59Z07`}
        />
        {/* This script initializes dataLayer and sends initial page view */}
        {/* Use dangerouslySetInnerHTML because this is an inline script block */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-SK66D59Z07');
            `,
          }}
        />
        {/* End Google tag (gtag.js) scripts */}

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1B2A4A" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://calendly.com" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}