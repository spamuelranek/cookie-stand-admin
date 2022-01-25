import Link from "next/link"
import { useAuth } from "../contexts/auth"

export default function Header() {

  const {user,logout} = useAuth()

  return (
    <header className=' bg-emerald-500 flex justify-center items-center'>
      <h1 className=' text-2xl font-extrabold px-4 py-1'>Cookie Stand Admin</h1>
      <div className="w-1/4"></div>
      <nav className=" p">
        <p className="inline px-2 mx-2 bg-green-100 rounded-md">{user.username}</p>
        <button className = 'px-2 mx-2 bg-emerald-700 rounded-md text-emerald-50 ' onClick={logout}>Sign Out</button>
        <Link  href="/Overview">
          <button className = " bg-green-100 rounded-md px-2 mx-2" > Overview </button>
        </Link>
      </nav>
    </header>
  )
}