import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

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
