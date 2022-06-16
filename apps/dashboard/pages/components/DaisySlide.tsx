import Image from 'next/image'
import TeacherCard from './TeacherCard'

const DaisySlide = () => {
  return (
    <div className='carousel carousel-center max-screen p-4 space-x-4  rounded-box'>
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
    </div>
  )
}

export default DaisySlide
