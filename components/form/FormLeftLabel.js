export default function FormLeftLabel(props) {
  return (
    <div className='flex justify-between items-center py-2 px-3 '>
      <div className=" mr-4 text-center w-5/6">
        <label className=' block pr-1 text-xs my-auto w-4/5'>{props.label}</label>
        <input name={props.name} className=' block w-11/12 bg-blue-100 text-sm ' type="text" />
      </div>
      <button className='bg-green-700 ml- 4 text-center w-32 rounded-sm'>Create</button>
    </div>
  )
}