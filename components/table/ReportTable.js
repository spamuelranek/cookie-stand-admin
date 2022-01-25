import {getTotals, grandTotal, getLocationSales} from "./TableMath"

function manageShowTable(props) {

  if (props.data.length == 0) {
    return <h2> No Cookie Stands Available</h2>
  }
  else {
    return displayTable(props)
  }
}

function displayTable(props) {

  const timesTd = props.times.map(time => <td key={time}>{time}</td>)

  const data = props.data.map(location =>
    getLocationSales(location)
  )

  const totals = props.times.map((time, index) =>
    <td key={time} className=" border-black border-2 ">{getTotals(index, props)}</td>
  )


  return (
    <section className=' text-center mb-10'>
      <table className="mx-auto bg-emerald-300 w-5/6" >
        <thead className=" bg-emerald-500 px-3 py-1">
          <tr>
            <td className="text-left">Location</td>
            {timesTd}
            <td className="text-left">Totals</td>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
        <tfoot className=" bg-emerald-500 px-3 py-1">
          <tr>
            <td className=" border-black border-2 text-left">Totals</td>
            {totals}
            {grandTotal(props)}
          </tr>
        </tfoot>
      </table>
    </section>
  )
}

export default function ReportTable(props) {

  return (
    <div className=" text-center">
      {manageShowTable(props)}
    </div>
  )
}
