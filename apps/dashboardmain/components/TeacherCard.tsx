import {Teacher} from 'interfaces/types'
import Image from 'next/image'
import {FC} from 'react'

type Props = {
  teacher: Teacher
  request: (id: number) => void
}

const TeacherCard: FC<Props> = ({teacher, request}) => {
  return (
    <div className='carousel-item  flex justify-center items-center  lg:w-[547px] lg:h-[263px] rounded-lg shadow-card text-tertiary-mid-dark'>
      <div className='card shadow-md  lg:card-side rounded w-[330px] lg:w-[476px] lg:h-[199px] bg-white'>
        <div className='lg:w-[156px] hidden lg:block   lg:h-[199px] bg-tertiary-mid-dark'>
          {/* <Image
            src='https://api.lorem.space/image/movie?w=200&h=280'
            width={200}
            height={280}
            alt='who'
            className='hidden lg:flex'
          /> */}
        </div>

        <div className=' rounded-full mx-auto w-[120px] overflow-hidden  h-[120px] lg:hidden bg-blue-500'>
          {/* <Image
            src='https://api.lorem.space/image/movie?w=200&h=280'
            width={200}
            height={280}
            alt='who'
            className='lg:hidden'
          /> */}
        </div>

        <div className='card-body text-center lg:text-left p-0 pl-3 lg:h-[199px] flex flex-col justify-start items-start  '>
          <div className=' mx-auto lg:mx-0'>
            <h2 className='card-title  truncate   lg:text-left text-14'>
              {teacher.name}
            </h2>
            <p className='text-14 -mt-2'>{teacher.subjects} </p>
          </div>
          <p className='text-10 lg:w-[300px]  line-clamp-4 '>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            officia inventore aut magnam, rerum non saepe expedita modi officiis
            molestiae eveniet quibusdam! Officiis modi perferendis quisquam
            quidem nemo.
            {teacher.profile}
          </p>
          <div className='card-actions mx-auto lg:mx-0 justify-self-center  lg:justify-start'>
            <button
              onClick={() => request(teacher.id)}
              className='w-[139px] h-[35px]  mb-2 bg-primary-light rounded-md text-white font-bold text-15'
            >
              Request
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherCard
