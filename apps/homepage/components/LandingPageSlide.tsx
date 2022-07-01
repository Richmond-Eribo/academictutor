import React from 'react'
import Image from 'next/image'

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

// import './styles.css'

// import required modules
import {Pagination} from 'swiper'

type Props = {}

function LandingPageSlide({}: Props) {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className=' '>
        <SwiperSlide>
          <div className='flex flex-col  pt-10 md:pt-0 lg:flex-row justify-between  lg:justify-center items-center lg:px-2'>
            <h1 className='font-extrabold mb-20 lg:mb-0 text-center lg:text-left text-[30px] md:text-[45px] md:w-[560px] lg:text-[50px] lg:w-[600px] '>
              The excellent place <br /> to find Academic solutions
            </h1>
            <figure className='hidden md:block'>
              <Image
                className='self-end'
                src='/slides/teacher2 1.png'
                height={742 / 1.3}
                width={645 / 1.4}
                // src='/slides/teacher 1.png'
                // height={811 / 1.4}
                // width={733 / 1.4}
                alt={'teacher 1'}
              />
            </figure>

            <figure className='md:hidden  '>
              <Image
                className='self-end'
                src='/slides/teacher2 1.png'
                height={692 / 1.5}
                width={595 / 1.6}
                // src='/slides/teacher 1.png'
                // height={811 / 1.4}
                // width={733 / 1.4}
                alt={'teacher 1'}
              />
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx>{``}</style>
    </div>
  )
}

export default LandingPageSlide
