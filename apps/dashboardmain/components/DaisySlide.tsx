import {Teacher} from 'interfaces/types'
import Image from 'next/image'
import {FC} from 'react'
import TeacherCard from './TeacherCard'

type Props = {
  teachers: Teacher[]
  request: (id: number) => void
}

const DaisySlide: FC<Props> = ({teachers, request}) => {
  return (
    <div className='carousel carousel-center max-screen p-4 space-x-4  rounded-box'>
      {/* {teachers &&
        teachers.map((teacher, index) => (
          <TeacherCard key={index} teacher={teacher} request={request} />
        ))} */}
      <p className='text-center text-xl'>this is a test</p>
      {/* <TeacherCard />
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
      <TeacherCard /> */}
    </div>
  )
}

export default DaisySlide
