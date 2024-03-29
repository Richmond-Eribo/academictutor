import React from 'react'

type Props = {
  activeNumber: number
  type: string
  activeInput: number
  setActiveInput: React.Dispatch<React.SetStateAction<number>>
  placeholder: string
  marginTop: number
  value: string | number | undefined
  setValue: React.Dispatch<React.SetStateAction<any>>
}

const Input = ({
  activeInput,
  type,
  activeNumber,
  setActiveInput,
  placeholder,
  marginTop,
  value,
  setValue,
}: Props) => {
  return (
    <div
      className={` border-b-2   py-2 w-[330px] lg:w-[390px] mt-${marginTop} ${
        activeInput === activeNumber
          ? 'border-primary-mid  '
          : 'border-[#BFC7D3]'
      } `}
      onClick={() => setActiveInput(activeNumber)}
    >
      <input
        type={type}
        className=' w-full border-0 outline-none bg-none text-xs lg:text-base'
        placeholder={placeholder}
        value={value}
        onChange={event => setValue(event.target.value)}
        // autoComplete='off'
        required
      />
    </div>
  )
}

export default Input
