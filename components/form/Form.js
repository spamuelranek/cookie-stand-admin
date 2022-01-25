import FormLabel from "./FormLabel";
import FormLeftLabel from "./FormLeftLabel";

export default function Form(props) {
  return (
    <form className = "p-4 bg-emerald-400 w-5/6 mx-auto my-5 rounded-md" onSubmit={props.handleForm}>
      <FormLeftLabel label="Location" name="location" />
      <div className='flex p-3 justify-between items-center '>
        <FormLabel label="Minimum Customers per Hour" name="minCust" />
        <FormLabel label="Maximum Customers per Hour" name="maxCust" />
        <FormLabel label="Average Cookies per Sale" name="avgCust" />
      </div>
    </form>
  )
}