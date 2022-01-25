
import { useState } from "react"
import Form from "./form/Form";
import ReportTable from "./table/ReportTable";



export default function Main() {

  const timesOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

  const [totalLocationData, setTotalLocationData] = useState([])

  //gathers data from the form and stores it in totalLocationData
  function handleForm(e) {
    e.preventDefault();
    console.log("woot");
    const {location, minCust, maxCust, avgCust} = e.target
    
    //generates random amount of sales per hour 
    let storeDailyTotal = 0
    const hourlySale = timesOfOperation.map(time => {
      const floor = Math.floor(Math.random() * (maxCust.value - minCust.value + 1))
      const randomAmountOfcustomers = floor + parseInt(minCust.value)
      console.log("randomAmount:",randomAmountOfcustomers)

      const cookiesSold = randomAmountOfcustomers * avgCust.value

      storeDailyTotal = storeDailyTotal + cookiesSold
      return cookiesSold
    })

    const locationData = { "location": location.value, "hourlySales":hourlySale, "dailyTotal":storeDailyTotal }
    setTotalLocationData([...totalLocationData, locationData]);
  }

  return (
    <main>
      <Form handleForm={handleForm} />
      <ReportTable className = "w-5/6" data={totalLocationData} times = {timesOfOperation} />
    </main>
  )
}




