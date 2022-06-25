type Props = {
  // activeNumber: number
  // type: string
  // activeInput: number
  // setActiveInput: React.Dispatch<React.SetStateAction<number>>
  placeholder: string
  // marginTop: number
  value: string | number | undefined
  setValue: React.Dispatch<React.SetStateAction<any>>
}

const DocumentInput = (Props: Props) => {
  return (
    <div className='flex justify-center'>
      <div className='mb-3 w-96'>
        <label
          htmlFor='formFileSm'
          className='form-label text-sm inline-block mb-2 text-gray-700'
        >
          {Props.placeholder}
        </label>
        <input
          className='form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          id='formFileSm'
          type='file'
          value={Props.value}
          onChange={event => Props.setValue(event.target.value)}
        />
      </div>
    </div>
  )
}

export default DocumentInput
