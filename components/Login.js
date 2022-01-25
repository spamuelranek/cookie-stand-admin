import { useAuth } from "../contexts/auth"

export default function Login() {

  const {login} = useAuth()
  
  function handleForm(e){
    e.preventDefault()
    login(e.target.username.value, e.target.password.value)

  }
  

  return (
    <form onSubmit= {handleForm} className=" mx-auto w-3/4 bg-emerald-300 px-6 text-center py-6 rounded-md border-emerald-400 border-4" >
        <label className="flex-auto block font-bold my-3" htmlFor="username">USER NAME</label>
        <input className=" w-11/12 block mx-auto p-2 my-3" name="username" placeholder="User Name" />
        <label className="block font-bold my-3" htmlFor="password">PASSWORD</label>
        <input className=" w-11/12 block mx-auto p-2 my-3" name="password" placeholder="password" />
        <button className=" w-11/12 block mx-auto p-4 bg-emerald-600 rounded-md mt-6" >SIGN IN</button>
    </form>
  )
}

