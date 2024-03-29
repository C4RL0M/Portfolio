import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/globals";
import theme from "../styles/theme/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <title>Carlos Nowatzki | Front-end Developer</title>
        <meta name="title" content="Carlos Nowatzki | Front-end Developer" />
        <meta
          name="description"
          content="Front-end Developer & UI/UX Designer"
        />
        <meta
          name="google-site-verification"
          content="u6Vdueaj4zUT5QC9kQe57N0BopUpzrTN9HxiHTOZIBo"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://carloshtml.com/" />
        <meta
          property="og:title"
          content="Carlos Nowatzki | Front-end Developer"
        />
        <meta name="theme-color" content="#4C30F5;
" />
        <meta name="background-color" content="#0B0D17" />
        <meta
          property="og:description"
          content="Front-end Developer & UI/UX Designer"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://carloshtml.com/" />
        <meta
          property="twitter:title"
          content="Carlos Nowatzki | Front-end Developer"
        />
        <meta
          property="twitter:description"
          content="Front-end Developer & UI/UX Designer"
        />
        <meta
          name="keywords"
          content="front-end, developer front-end, ui ux designer, graphic designer,
            developer front-end freelancer, developer reactjs, developer javascript,
            javascript, react, reactjs, typescript, strapi, api, dev, nextjs, cypress, tests,
            carlosnowatzki, carlosnowatzky, carloshtml, carlos nowaztki, freelancer, freela"
        />
        <meta name="robots" content="nofollow" />
        <meta name="revisit-after" content="1 day" />
        <meta property="”og:type”" content="”website”" />
        <meta property="”og:locale”" content="”pt_BR”" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
};
export default App;
