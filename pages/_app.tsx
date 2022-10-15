import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
   
      <NextSeo
        title="Okera Johnson | Fullstack Developer"
        titleTemplate="Okera Johnson | Fullstack Developer"
        defaultTitle="Okera Johnson | Fullstack Developer"
        description="Hey! I'm Okera Johnson, A Fullstack Developer"
        openGraph={{
          url: "https://www.Okera.digital/",
          title: "Okera Johnson | Fullstack Developer",
          description:
            "Hey! I'm Okera Johnson, A Fullstack Developer",
          images: [
            {
              url: "https://avatars.githubusercontent.com/u/16062726?v=4",
              width: 800,
              height: 420,
              alt: "Okera Johnson | Fullstack Developer",
            },
          ],
        }}
        twitter={{
          handle: "@kr_Okera Johnson_",
          site: "@kr_Okera Johnson_",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Fullstack Developer, Okera Johnson, Okera Johnson, Web Developer, web development, web developer, blogger, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/jpeg" href="/assests/avatar.jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
