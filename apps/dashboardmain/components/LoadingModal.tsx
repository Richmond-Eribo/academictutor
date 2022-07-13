import {FC} from 'react'

type Props = {
  text: string
}

const LoadingModal: FC<Props> = ({text}) => {
  return (
    <div className='fixed z-50 inset-0 bg-black/90 flex justify-center items-center'>
      <div className='bg-white w-[350px] lg:w-[400px] p-5 rounded-lg '>
        <p className='text-xl text-center font-bold'>{text}...</p>
      </div>
    </div>
  )
}

export default LoadingModal
