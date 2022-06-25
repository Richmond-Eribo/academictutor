import Image from 'next/image'

const TeacherCard = () => {
  return (
    <div className='carousel-item flex justify-center items-center w-[342px] h-[193px]  lg:w-[547px] lg:h-[263px] rounded-lg shadow-card  text-tertiary-mid-dark'>
      <div className='card  card-side rounded  w-[90%] h-[85%] bg-whit'>
        <figure className='lg:w-[156px]h w-[35%] h-[100%] '>
          <Image
            src='/teacherpic.png?w=200&h=280'
            width={200}
            height={280}
            alt='who'
          />
        </figure>
        <div className='card-body  p-0 pl-3 h-[100%] grid justify-start items-start  '>
          <div>
            <h2 className='card-title text-14'>Dr Stephen Adegbite</h2>
            <p className='text-14 -mt-1'>Maths and Science</p>
          </div>
          <div>
            <p className='text-[10px] h-[65px]   lg:text-sm lg:w-[300px] w-[200px] '>
              My teaching approaches enable pupils to easily recall mathematical
              facts and methods through practice to embed key learning points.
            </p>
          </div>
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
