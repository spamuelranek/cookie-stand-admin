
import { useState } from "react"
import { hourlySale } from "../data";
import Form from "./Form";
import ReportTable from "./ReportTable";



export default function Main() {

  const timesOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

  const [totalLocationData, setTotalLocationData] = useState([])

  //gathers data from the form and stores it in totalLocationData
  function handleForm(e) {
    e.preventDefault();
    console.log("woot");
    const [location, minCust, maxCust, avgCust] = e.target
    
    //generates random amount of sales per hour 
    let storeDailyTotal = 0
    const hourlySale = timesOfOperation.map(time => {
      const randomAmountOfcustomers = Math.floor(Math.random() * (maxCust.value - minCust.value)) + minCust.value
      const cookiesSold = randomAmountOfcustomers * avgCust.value
      storeDailyTotal = storeDailyTotal + cookiesSold
      return cookiesSold
    })

    const locationData = { "location": location.value, "hourlySales":hourlySale, "dailyTotal":storeDailyTotal }
    setTotalLocationData([...totalLocationData, locationData]);
  }

  return (
    <main className=''>
      <div className=' bg-emerald-400 w-3/4 mx-auto my-5 rounded-md'>
        <h2 className=' text-center py-3'>Create Cookie Stand</h2>
        <Form handleForm={handleForm} />
      </div>
      <ReportTable data={totalLocationData} times = {timesOfOperation} />
    </main>
  )
}




