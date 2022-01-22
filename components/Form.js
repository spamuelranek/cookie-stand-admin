import FormLabel from "./FormLabel";
import FormLeftLabel from "./FormLeftLabel";

export default function Form(props) {
  return (
    <form onSubmit={props.handleForm}>
      <FormLeftLabel label="Location" name="location" />
      <div className='flex p-3 text-center'>
        <FormLabel label="Minimum Customers per Hour" name="minCust" />
        <FormLabel label="Maximum Customers per Hour" name="maxCust" />
        <FormLabel label="Average Cookies per Sale" name="avgCust" />
        <button className='bg-green-700 text-center w-64 rounded-sm'>Create</button>
      </div>
    </form>
  )
}