

export default function ReportTable(props) {

  function manageShowTable(props) {

    if (props.data.length == 0) {
      return <h2> No Cookie Stands Available</h2>
    }
    else {
      return displayTable(props)
    }
  }

  function displayTable(props) {

    function getTotals(index, props) {
      let hourTotal = 0
      props.data.map(location =>
        hourTotal = hourTotal + location.hourlySales[index]
      )
      return hourTotal
    }

    function grandTotal(props) {
      let worldDailyTotal = 0
      props.data.map(location =>
        worldDailyTotal += location.dailyTotal
      )
      return <td className=" border-black border-2 ">{worldDailyTotal}</td>
    }

    function getLocationSales(location) {
      return (
        <tr key={location.location}>
          <td className=" border-black border-2 ">{location.location}</td>
          {location.hourlySales.map((sale, index) => <td key={index} className=" border-black border-2 ">{sale}</td>)}
          <td className=" border-black border-2 ">{location.dailyTotal}</td>
        </tr>
      )
    }

    const timesTd = props.times.map(time => <td key={time}>{time}</td>)

    const data = props.data.map(location =>
      getLocationSales(location)
    )

    const totals = props.times.map((time, index) =>
      <td key={time} className=" border-black border-2 ">{getTotals(index, props)}</td>
    )


    return (
      <section className=' text-center mb-10'>
        <table className="mx-auto bg-emerald-300" >
          <thead className=" bg-emerald-500 px-3 py-1">
            <tr>
              <td>Location</td>
              {timesTd}
              <td>Totals</td>
            </tr>
          </thead>
          <tbody>
            {data}
          </tbody>
          <tfoot className=" bg-emerald-500 px-3 py-1">
            <tr>
              <td className=" border-black border-2 ">Totals</td>
              {totals}
              {grandTotal(props)}
            </tr>
          </tfoot>
        </table>
      </section>
    )
  }
  return (
    <div className=" text-center">
      {manageShowTable(props)}
    </div>
  )
}