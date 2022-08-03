import {RequesTeacherButtonText, Teacher, Type} from 'interfaces/types'
import Image from 'next/image'
import {FC} from 'react'
import Button from './Button'

type Props = {
  teacher: Teacher
  request: (id: number) => void
  text: RequesTeacherButtonText
  loadingState: boolean
  type: Type
}

const loaderProp = ({src}: any) => {
  return src
}
const TeacherCard: FC<Props> = ({
  teacher,
  request,
  text,
  loadingState,
  type,
}) => {
  return (
    <div className='carousel-item  flex justify-center items-center  lg:w-[547px] lg:h-[263px] rounded-lg shadow-card text-tertiary-mid-dark'>
      <div className='card shadow-md  lg:card-side rounded w-[330px] lg:w-[476px] lg:h-[199px] bg-white'>
        <div className='lg:w-[156px]  hidden overflow-hidden lg:block relative  lg:h-[199px] bg-tertiary-mid-dark'>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/get-file/${teacher.profile_picture}`}
            layout='fill'
            alt='hi'
            loader={loaderProp}
          />
        </div>

        <div className=' rounded-full relative mx-auto w-[120px] overflow-hidden  h-[120px] lg:hidden bg-blue-500'>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/get-file/${teacher.profile_picture}`}
            layout='fill'
            alt='hi'
            loader={loaderProp}
          />
        </div>

        <div className='card-body text-center lg:text-left p-0 pl-3 lg:h-[199px] flex flex-col justify-start items-start  '>
          <div className=' mx-auto lg:mx-0'>
            <h2 className='card-title  truncate   lg:text-left text-14'>
              {teacher.name}
            </h2>
            <p className='text-14 -mt-2'>{teacher.subjects} </p>
          </div>
          <p className='text-10 lg:w-[300px] text-center w-full lg:text-left line-clamp-4 '>
            {teacher.profile}
          </p>
          <div className='card-actions mx-auto lg:mx-0 justify-self-center  lg:justify-start'>
            <Button
              text={text}
              loadingState={loadingState}
              type={type}
              classname={[
                'w-[139px]',
                'h-[35px]',
                'mb-2',
                'bg-primary-light',
                'rounded-md',
                'text-white',
                'font-bold',
                'text-15',
              ]}
              onClickFunction={() => request(teacher.id)}
            />
            {/* <button onClick={() => request(teacher.id)} className=''></button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherCard
