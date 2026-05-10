// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css';
import '@/styles/globals.css';
import '@/styles/responsive.css';
import '@/styles/fonts.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
// import ModalSection from '@/components/layout/ModalSection';
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Script from 'next/script';

const GA_ID = 'G-SK66D59Z07';

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const is404Page = router.isFallback || router.pathname === '/404';

  useEffect(() => {
    // Lighter init: GSAP fade-in stays (cheap), Locomotive Scroll defers until idle
    // and skips when the user prefers reduced motion or on small viewports
    // (it caused 119ms forced reflow + main-thread spikes per Lighthouse).
    gsap.set(".fadeInUp", { y: "30%", opacity: 0 });
    ScrollTrigger.batch(".fadeInUp", {
      onEnter: batch => gsap.to(batch, { opacity: 1, duration: .8, delay: 0.5, stagger: 0.2, y: 0 }),
    });

    if (typeof window === 'undefined') return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmall = window.matchMedia('(max-width: 991px)').matches;
    if (reduceMotion || isSmall) return;

    let scroll;
    const start = () => {
      import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
        scroll = new LocomotiveScroll();
      });
    };
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1500));
    const handle = idle(start);

    return () => {
      if (window.cancelIdleCallback && typeof handle === 'number') window.cancelIdleCallback(handle);
      if (scroll && typeof scroll.destroy === 'function') scroll.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        {/* Override Next.js default to fix tap delay (PSI: "Optimize viewport for mobile"). */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      {/*
        GA4 loaded with strategy="lazyOnload" so the 175 KiB gtag bundle
        does not block FCP/LCP/TBT. dataLayer + gtag stub live in _document.
      */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>

      <AnimatePresence mode='wait'>
        <motion.div key={router.pathname}> {/* Corrected motion.dev to motion.div */}
          <main>
            {!is404Page && <Header />}
            {/* {!is404Page && <ModalSection />} */}
            <Component {...pageProps} />
            {!is404Page && <Footer />}
          </main>
          <motion.div className='slide-in' initial={{ scaleY: 0 }} animate={{ scaleY: 0 }} exit={{ scaleY: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}></motion.div>
          <motion.div className='slide-out' initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exit={{ scaleY: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}></motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}