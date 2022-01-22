
export default function FormLabel(props) {
  return (
    <div className=' px-3'>
      <label className='  block text-xs flex-auto'>{props.label}</label>
      <input name={props.name} type="number" className="block flex-auto" />
    </div>
  )
}