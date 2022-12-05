import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head >
        <title>A good Picks</title>
        <meta name="description" content="Official website for A good Pick" />
        <link rel="icon" href="" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
