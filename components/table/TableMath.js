import useResource from "../../hooks/useResource";
import TrashButton from "./TrashButton"

export function getTotals(index, resource) {
  let hourTotal = 0;
  resource.map(location =>
    hourTotal = hourTotal + location.hourly_sales[index]
  );
  return hourTotal;
}

export function GrandTotal() {
  const {resources} = useResource()

  const worldDailyTotal = resources.map(location => location.hourly_sales.reduce((prev, curr) => curr = curr + prev)).reduce((prev,curr) => curr = curr + prev);
  return <td className=" border-black border-2 ">{worldDailyTotal}</td>
}

export function GetLocationSales({location, color}) {
  const {deleteResource} = useResource()

  function handleClick(){
    deleteResource(location.id)
  }

  return (
    <tr className={color}>
      <td className=" flex justify-between border-black border-2 items-center ">{location.location}   <button onClick={handleClick}><TrashButton /></button></td>
      {location.hourly_sales.map((sale, index) => <td key={index} className=" border-black border-2 ">{sale}</td>)}
      <td className=" border-black border-2 ">{location.hourly_sales.reduce((prev,curr) => curr = curr + prev)}</td>
    </tr>
  )
}