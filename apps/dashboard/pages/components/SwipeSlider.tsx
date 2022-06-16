import {FC} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

// import required modules
import {Grid, Pagination} from 'swiper'

type TeacherProps = {
  TeacherCard: {name: string; subject: string; bio: string; imageUrl: string}[]
}

const SwipeSlider: FC<TeacherProps> = ({TeacherCard}) => {
  return (
    <>
      <p>swiper</p>
      {/* <Swiper
        slidesPerView={3.5}
        // grid={{
        //   rows: 4,
        // }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper '
      >
        {TeacherCard.map(n => (
          <SwiperSlide className=' shadow-card w-[647px] lg:h-[263px] bg-primary-mid'>
            hi this is me
          </SwiperSlide>
        ))}
      </Swiper> */}
    </>
  )
}

export default SwipeSlider
