import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head >
        <title>SFJ Business Solutions</title>
        <meta name="description" content="Official website for SFJ Business Solutions" />
        <link rel="icon" href="/ICONW.png " />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
