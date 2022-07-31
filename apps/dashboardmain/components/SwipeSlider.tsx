import {FC} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Teacher} from 'interfaces/types'
import TeacherCard from './TeacherCard'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

// import required modules
import {Autoplay, Navigation, Pagination} from 'swiper'

type TeacherProps = {
  teachers: Teacher[]
  request: (id: number) => void
}

const SwipeSlider: FC<TeacherProps> = ({teachers, request}) => {
  return (
    <>
      {/* {console.log('hi')} */}
      <Swiper
        slidesPerView={1.5}
        spaceBetween={10}
        slidesPerGroup={3}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 320,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {teachers &&
          teachers.map(teacher => (
            <SwiperSlide key={teacher.id} className='shadow-card'>
              <TeacherCard teacher={teacher} request={request} />
            </SwiperSlide>
          ))}
      </Swiper>
      {/* <p>hi</p> */}
      {/* <div className=' mb-3 w-[330px] lg:w-[476px] lg:h-[199px]  bg-red-300'>
            hellow
          </div> */}
    </>
  )
}

export default SwipeSlider
