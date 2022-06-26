import Image from 'next/image'

const TeacherCard = () => {
  return (
    <div className='carousel-item flex justify-center items-center  lg:w-[547px] lg:h-[263px] rounded-lg shadow-card text-tertiary-mid-dark'>
      <div className='card card-side rounded lg:w-[476px] lg:h-[199px] bg-white'>
        <figure className='lg:w-[156px] lg:h-[199px] bg-red-300'>
          <Image
            src='https://api.lorem.space/image/movie?w=200&h=280'
            width={200}
            height={280}
            alt='who'
          />
        </figure>
        <div className='card-body p-0 pl-3 lg:h-[199px] flex flex-col justify-start items-start  '>
          <div>
            <h2 className='card-title text-14'>Dr Stephen Adegbite</h2>
            <p className='text-14 -mt-1'>Maths and Science</p>
          </div>
          <p className='text-10 lg:w-[300px]'>
            My teaching approaches enable pupils to easily recall mathematical
            facts and methods through practice to embed key learning points. I
            am proficient in teaching Mathematics using practical contexts which
            learners can easily relate to, while ensuring that they consolidate
            their learning using tasks and problem solving exercises focussed on
            deepening understanding.
          </p>
          <div className='card-actions justify-start'>
            <button className='w-[139px] h-[35px] bg-primary-light rounded-md text-white font-bold text-15'>
              Request
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherCard
