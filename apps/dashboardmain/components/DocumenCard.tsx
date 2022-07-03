import {FC} from 'react'

type Props = {
  documentName: string
}

const DocumenCard: FC<Props> = ({documentName}) => {
  return (
    <div className='my-2 lg:w-[514px] lg:h-[60px] flex bg-[#F0FBFF] rounded-2xl  items-center justify-between px-3'>
      <p>{documentName}</p>

      <div>
        <button className='w-[95px] h-[35px] bg-red-600/60 hover:bg-red-600 duration-150  rounded-3xl text-white mr-3'>
          Reject
        </button>
        <button className='w-[95px] h-[35px] bg-primary-light/60 hover:bg-primary-mid duration-150  rounded-3xl text-white'>
          Accept
        </button>
      </div>
    </div>
  )
}

export default DocumenCard
