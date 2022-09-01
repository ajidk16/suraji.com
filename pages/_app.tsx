import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "../styles/blog.css";
import "../styles/main.css";
import "../styles/code-highlight.css";
import { useRouter } from "../node_modules/next/router";
import React, { useEffect } from "react";
import { pageview } from "../lib/config/ga";
import Head from "../node_modules/next/head";
import Script from "../node_modules/next/script";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <React.Fragment>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA}');
        `}
      </Script>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
