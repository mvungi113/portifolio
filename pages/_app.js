import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`body{display:block !important}`}</style>
        <link rel="icon" href="/images/kindo.jpg" />
        <link rel="apple-touch-icon" href="/images/kindo.jpg" />
        <link rel="stylesheet" href="/css/css.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/bootstrap-icons.css" />
        <link rel="stylesheet" href="/css/boxicons.min.css" />
        <link rel="stylesheet" href="/css/glightbox.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
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
      <Script id="unhide-body" strategy="afterInteractive">{`document.body.style.display = 'block';`}</Script>

      <Component {...pageProps} />
    </>
  );
}
