import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/kindo.jpg" />
        <link rel="apple-touch-icon" href="/images/kindo.jpg" />
      </Head>

      <Script src="/js/purecounter.js" strategy="afterInteractive" />
      <Script src="/js/aos.js" strategy="afterInteractive" />
      <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/js/glightbox.min.js" strategy="afterInteractive" />
      <Script src="/js/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/js/typed.min.js" strategy="afterInteractive" />
      <Script src="/js/noframework.waypoints.js" strategy="afterInteractive" />
      <Script src="/js/validate.js" strategy="afterInteractive" />
      <Script src="/js/portfolio.js" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
      <Script id="unhide-body" strategy="beforeInteractive">{`(function(){
        try{
          // Remove Next.js FOUC hiding style if present
          var hides = document.querySelectorAll('[data-next-hide-fouc]');
          hides.forEach(function(h){ if (h && h.parentNode) h.parentNode.removeChild(h); });
          // Ensure body is visible for templates that expect it
          document.body.style.display = 'block';
          document.body.style.visibility = 'visible';
          document.body.style.opacity = '1';
        }catch(e){ /* ignore */ }
      })();`}</Script>

      <Component {...pageProps} />
    </>
  );
}
