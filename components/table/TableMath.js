import TrashButton from "./TrashButton"

export function getTotals(index, props) {
  let hourTotal = 0
  props.data.map(location =>
    hourTotal = hourTotal + location.hourlySales[index]
  )
  return hourTotal
}

export function grandTotal(props) {
  let worldDailyTotal = 0
  props.data.map(location =>
    worldDailyTotal += location.dailyTotal
  )
  return <td className=" border-black border-2 ">{worldDailyTotal}</td>
}

export function getLocationSales(location) {
  return (
    <tr key={location.location}>
      <td className=" flex justify-between border-black border-2 items-center ">{location.location}   <button><TrashButton /></button></td>
      {location.hourlySales.map((sale, index) => <td key={index} className=" border-black border-2 ">{sale}</td>)}
      <td className=" border-black border-2 ">{location.dailyTotal}</td>
    </tr>
  )
}