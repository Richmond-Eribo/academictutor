import {FC} from 'react'

type Props = {
  documentName: string
}

const DocumenCard: FC<Props> = ({documentName}) => {
  return (
    <div className='my-2 py-3 flex-col lg:flex-row lg:w-[514px] lg:h-[60px] flex bg-[#F0FBFF] rounded-2xl  items-center justify-between px-3'>
      <p>{documentName}</p>

      <div>
        <button className='w-[95px] h-[35px] bg-[#EF553B] duration-150  rounded-xl text-white mr-3'>
          Reject
        </button>
        <button className='w-[95px] h-[35px] bg-primary-light  duration-150  rounded-xl text-white'>
          Accept
        </button>
      </div>
    </div>
  )
}

export default DocumenCard
