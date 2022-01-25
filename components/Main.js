
import { useState } from "react"
import useResource from "../hooks/useResource";
import Form from "./form/Form";
import ReportTable from "./table/ReportTable";
import React from "react";
import { useAuth } from "../contexts/auth";

  export const TimeContext = React.createContext()


export default function Main() {

  const timesOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

  const { createResource } = useResource();
  const { user } = useAuth()
  //gathers data from the form and stores it at the API
  function handleForm(e) {
    e.preventDefault();
    console.log("woot");
    const { location, minCust, maxCust, avgCust } = e.target;

    let storeDailyTotal = 0
    const hourlySale = timesOfOperation.map(time => {
      const floor = Math.floor(Math.random() * (maxCust.value - minCust.value + 1))
      const randomAmountOfcustomers = floor + parseInt(minCust.value)
      console.log("randomAmount:",randomAmountOfcustomers)

      const cookiesSold = randomAmountOfcustomers * avgCust.value

      storeDailyTotal = storeDailyTotal + cookiesSold
      return cookiesSold
    })

    const info = {
      location: location.value,
      hourly_sales: hourlySale,
      minimum_customers_per_hour: minCust.value,
      maximum_customers_per_hour: maxCust.value,
      average_cookies_per_sale: avgCust.value,
      owner:user.id
    };


    createResource(info);


  }

  return (
    <main>
      <Form handleForm={handleForm} />
      <TimeContext.Provider value={timesOfOperation}>
        <ReportTable className="w-5/6"  />
      </TimeContext.Provider>
    </main>
  )
}




