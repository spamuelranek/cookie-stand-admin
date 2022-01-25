import Head from 'next/head'
import Login from '../components/Login.js'

import Header from '../components/Header.js'
import Main from '../components/Main.js'
import Footer from '../components/Footer.js'
import { useAuth } from '../contexts/auth.js'


export default function Home() {

  const {user, login, logout } = useAuth()

  return (
    <div className=' bg-emerald-50 '>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <SignIn user = {user} />
    </div>
  )
}

function SignIn({ user }) {


  if (!user) {
    return <Login />
  }
  else {
    return <LoggedInPage />
  }
}

function LoggedInPage() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}