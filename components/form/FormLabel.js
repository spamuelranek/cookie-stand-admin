
export default function FormLabel(props) {
  return (
    <div className='px-3 flex-auto'>
      <label className='  block text-xs flex-auto mb-2'>{props.label}</label>
      <input name={props.name} type="number" className="block flex-auto w-11/12 px-2" defaultValue="2" />
    </div>
  )
}