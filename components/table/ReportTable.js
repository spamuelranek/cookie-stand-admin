import useResource from "../../hooks/useResource";
import { TimeContext } from "../Main";
import { getTotals, GrandTotal, GetLocationSales } from "./TableMath"
import React from "react";

function ShowTable() {

  const { resources } = useResource()


  if (resources) {
    return < DisplayTable resources={resources} />
  }
  else {
    return <h2> No Cookie Stands Available</h2>
  }
}

function DisplayTable({resources}) {

  const times = React.useContext(TimeContext)

  function TimesTd(){
    return times.map(time => <td key={time}>{time}</td>);
  }

  function Data(){
    return resources.map((location, index) =>
      {let color = ""
        if (index % 2 == 0){
        color ="bg-emerald-300" 
      } 
      else { color ="bg-emerald-200"}

      return <GetLocationSales color={color} key ={location.location} location ={location} />
      });
  } 

  function Totals(){
    return times.map((time, index) =>
      <td key={time} className=" border-black border-2 ">{getTotals(index, resources)}</td>
    );

  } 


  return (
    <section className=' text-center mb-10'>
      <table className="mx-auto  w-5/6" >
        <thead className=" bg-emerald-500 px-3 py-1">
          <tr>
            <td className="text-left">Location</td>
            <TimesTd />
            <td className="text-left">Totals</td>
          </tr>
        </thead>
        <tbody>
          <Data resources = {resources}/>
        </tbody>
        <tfoot className=" bg-emerald-500 px-3 py-1">
          <tr>
            <td className=" border-black border-2 text-left">Totals</td>
            <Totals resources = {resources}/>
            <GrandTotal />
          </tr>
        </tfoot>
      </table>
    </section>
  )
}

export default function ReportTable() {

  return (
    <div className=" text-center">
      <ShowTable />
    </div>
  )
}
