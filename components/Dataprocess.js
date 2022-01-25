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