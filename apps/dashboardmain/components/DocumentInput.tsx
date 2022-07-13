import {ChangeEvent, FC} from 'react'

type Props = {
  // activeNumber: number
  // type: string
  // activeInput: number
  // setActiveInput: React.Dispatch<React.SetStateAction<number>>
  placeholder: string
  // marginTop: number
  value: any
  setValue: React.Dispatch<React.SetStateAction<any>>
  id: string
}
const DocumentInput: FC<Props> = ({placeholder, value, setValue, id}) => {
  const upLoadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]

    if (file?.size > 52400000)
      // onFileSelectError({ error: "File size cannot exceed more than 15MB" });
      alert('file size cannot exceed more than 50mb')
    else setValue(file)
  }

  return (
    <div className='flex justify-center'>
      <div className='mb-3 w-96'>
        <label
          htmlFor={id}
          className='form-label text-sm inline-block mb-2 text-gray-700'
        >
          {placeholder}
        </label>
        <input
          className='form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          id={id}
          type='file'
          // value={value?.name}
          onChange={event => upLoadFile(event)}
          // autoComplete='off'
        />
      </div>
    </div>
  )
}

export default DocumentInput
