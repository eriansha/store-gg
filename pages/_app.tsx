import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import '../styles/utilities.css'
import '../styles/homepage.css'
import '../styles/detail.css'
import '../styles/checkout.css'
import '../styles/complete-checkout.css'
import '../styles/sign-in.css'
import '../styles/sign-up.css'
import '../styles/sign-up-photo.css'
import '../styles/sign-up-success.css'
import '../styles/404-not-found.css'
import '../styles/overview.css'
import '../styles/sidebar.css'
import '../styles/transactions.css'
import '../styles/transactions-detail.css'
import '../styles/edit-profile.css'


const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      { /** Bootstrap CSS */ }
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossOrigin="anonymous"
      />

      { /* <!-- AOS Animation --> */ }
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    </Head>

    { /** resolve https://nextjs.org/docs/messages/no-sync-scripts */ }
    <div>
      { /** Bootstrap JS */ }
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossOrigin="anonymous"
      ></Script>
    </div>
    <Component { ...pageProps } />
  </>
)
export default MyApp
