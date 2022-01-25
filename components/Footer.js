import useResource from "../hooks/useResource"

export default function Footer() {
  const { resources } = useResource()
  
  function AmountOfStores(){
    if (resources && resources.length > 0) {
      return resources.length
    }
    else{
      return 0
    }
  }


  return (
    <footer className=' bg-emerald-500 p-3'>
      <h3 className='text-xs text-gray-800'> There is {AmountOfStores()} stores open in the world</h3>
    </footer>
  )
}