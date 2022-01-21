
import { useState } from "react"


export default function Main() {

  const [totalLocationData, setTotalLocationData] = useState([])
  const [locationData, setLocationData] = useState({})

  function handleChange(e){
    let object = locationData;
    object[e.target.name] = e.target.value;
    setLocationData(object);
  }

  function handleForm(e) {
    e.preventDefault();
    console.log("woot");
    let lst = totalLocationData
    console.log(lst)
    lst.push(locationData)
    setTotalLocationData(lst);
    console.log(totalLocationData)
  }



  return (
    <main className=''>
      <div className=' bg-emerald-400 w-3/4 mx-auto my-5 rounded-md'>
        <h2 className=' text-center py-3'>Create Cookie Stand</h2>
        <Form handleChange = {handleChange} handleForm = {handleForm} locationData = {locationData}/>
      </div>
      <ReportTable />
    </main>
  )
}

function Form(props) {
  return (
    <form id='locationData'>
      <FormLeftLabel label="Location" name="location" handleChange = {props.handleChange} locationData = {props.locationData}/>
      <div className='flex p-3 text-center'>
        <FormLabel label="Minimum Customers per Hour" name="minCust" handleChange = {props.handleChange} locationData = {props.locationData}/>
        <FormLabel label="Maximum Customers per Hour" name="maxCust" handleChange = {props.handleChange} locationData = {props.locationData}/>
        <FormLabel label="Average Customers per Hour" name="avgCust" handleChange = {props.handleChange} locationData = {props.locationData}/>
        <button onClick={props.handleForm} className='bg-green-700 text-center w-64 rounded-sm'>Create</button>
      </div>
    </form>
  )
}

function FormLeftLabel(props) {
  return (
    <div className='flex py-2 px-3'>
      <label className='pr-1 text-xs my-auto'>{props.label}</label>
      <input name={props.name} className=' flex-auto bg-blue-100 text-sm' type="text" value = {props.locationData[props.name]} onChange={props.handleChange}/>
    </div>
  )
}

function FormLabel(props) {
  return (
    <div className=' flex-auto px-3'>
      <label className='  text-xs'>{props.label}</label>
      <input name={props.name} type="number" value = {props.locationData[props.name]} onChange={props.handleChange}/>
    </div>
  )
}

function ReportTable() {
  const jsonTable = '{"location":"Barcelona","minCustomers":2,"maxCustomers":4,"avgCookies":2.5}'
  return (
    <section className=' text-center'>
      <h4 className='my-3 text-sm text-gray-500'>Report Table Coming Soon...</h4>
      <p className='my-4 text-sm text-gray-500'>{jsonTable}</p>
    </section>
  )
}