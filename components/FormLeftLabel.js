export default function FormLeftLabel(props) {
  return (
    <div className='flex py-2 px-3'>
      <label className='pr-1 text-xs my-auto'>{props.label}</label>
      <input name={props.name} className=' flex-auto bg-blue-100 text-sm' type="text" />
    </div>
  )
}