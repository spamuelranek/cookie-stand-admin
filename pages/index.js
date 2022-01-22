import Head from 'next/head'


import Header from '../components/Header.js'
import Main from '../components/Main.js'
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <body className=' bg-emerald-50 '>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <Main />
      <Footer />

    </body>
  )
}
