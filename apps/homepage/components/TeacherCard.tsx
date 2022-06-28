import Image from 'next/image'
import {FC} from 'react'
import GoodTick from './Svg/GoodTick'

type Props = {
  name: string
  subjects: Array<string> | string
  bio: string
  image?: string
}

const TeacherCard: FC<Props> = props => {
  const {name, subjects, bio, image} = props

  return (
    <figure className='w-[390px] carousel-item flex flex-col justify-around rounded-md h-[249px]g md:w-[415px] md:h-[219px]g lg:w-[530px] lg:h-[290px]g p-4 shadow-card text-[13px] md:text-[11px] lg:text-[14px] '>
      <p className=''>{bio}</p>

      <div className='flex justify-between mt-4'>
        <div className='flex justify-center items-center'>
          <Image
            src={image ? image : '/teampic/grey.png'}
            height={57}
            width={57}
            alt='wow'
          />
          <div className='mx-2'>
            <p>
              <strong>{name}</strong>
            </p>
            <p className='font-light'> {subjects}</p>
          </div>
        </div>
        <div className=' my-auto'>
          <GoodTick />
        </div>
      </div>
    </figure>
  )
}

export default TeacherCard
