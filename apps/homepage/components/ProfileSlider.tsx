import React from 'react'
import Image from 'next/image'

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

// import './styles.css'

// import required modules
import {Pagination} from 'swiper'

type Props = {}

function ProfileSlider({}: Props) {
  return (
    <Swiper
      slidesPerView={3.5}
      spaceBetween={5}
      modules={[Pagination]}
      className='lg:h-[82vh] w-full'
    >
      {Teachers.map(Teacher => (
        <SwiperSlide key={Teacher.name}>
          <figure
            key={Teacher.name}
            className='lg:w-[376px] lg:p-6 bg-white rounded-xl shadow-lg flex flex-col justify-center items-center '
          >
            <Image
              height={148}
              width={148}
              src='/Profile1.png'
              alt='Profile Image'
              className='rounded-full'
            />
            <h3 className='font-bold lg:mt-4'>{Teacher.name}</h3>
            <p>{Teacher.role}</p>
            <figcaption className='text-xs text-center'>
              {Teacher.text}{' '}
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const Teachers = [
  {
    name: 'Dr Stephen Adegbite',
    role: 'Maths and Science',
    text: 'I have the competence and experience to engage and inspire learners in the teaching and learning of Mathematics so that they can develop confidence and achieve their full potentials. I use good questioning strategies to assess students" understanding and progress. My students make significant progress in understanding Mathematics, evidenced by their increased confidence in answering questions and performance improvements in assessments. My teaching approaches enable pupils to easily recall mathematical facts and methods through practice to embed key learning points. I am proficient in teaching Mathematics using practical contexts which learners can easily relate to, while ensuring that they consolidate their learning using tasks and problem solving exercises focussed on deepening understanding.',
  },
  {
    name: 'Dr Stephen Adegbite',
    role: 'Maths and Science',
    text: 'I have the competence and experience to engage and inspire learners in the teaching and learning of Mathematics so that they can develop confidence and achieve their full potentials. I use good questioning strategies to assess students" understanding and progress. My students make significant progress in understanding Mathematics, evidenced by their increased confidence in answering questions and performance improvements in assessments. My teaching approaches enable pupils to easily recall mathematical facts and methods through practice to embed key learning points. I am proficient in teaching Mathematics using practical contexts which learners can easily relate to, while ensuring that they consolidate their learning using tasks and problem solving exercises focussed on deepening understanding.',
  },
  {
    name: 'Dr Stephen Adegbite',
    role: 'Maths and Science',
    text: 'I have the competence and experience to engage and inspire learners in the teaching and learning of Mathematics so that they can develop confidence and achieve their full potentials. I use good questioning strategies to assess students" understanding and progress. My students make significant progress in understanding Mathematics, evidenced by their increased confidence in answering questions and performance improvements in assessments. My teaching approaches enable pupils to easily recall mathematical facts and methods through practice to embed key learning points. I am proficient in teaching Mathematics using practical contexts which learners can easily relate to, while ensuring that they consolidate their learning using tasks and problem solving exercises focussed on deepening understanding.',
  },
  {
    name: 'Dr Stephen Adegbite',
    role: 'Maths and Science',
    text: 'I have the competence and experience to engage and inspire learners in the teaching and learning of Mathematics so that they can develop confidence and achieve their full potentials. I use good questioning strategies to assess students" understanding and progress. My students make significant progress in understanding Mathematics, evidenced by their increased confidence in answering questions and performance improvements in assessments. My teaching approaches enable pupils to easily recall mathematical facts and methods through practice to embed key learning points. I am proficient in teaching Mathematics using practical contexts which learners can easily relate to, while ensuring that they consolidate their learning using tasks and problem solving exercises focussed on deepening understanding.',
  },
  {
    name: 'Dr Stephen Adegbite',
    role: 'Maths and Science',
    text: 'I have the competence and experience to engage and inspire learners in the teaching and learning of Mathematics so that they can develop confidence and achieve their full potentials. I use good questioning strategies to assess students" understanding and progress. My students make significant progress in understanding Mathematics, evidenced by their increased confidence in answering questions and performance improvements in assessments. My teaching approaches enable pupils to easily recall mathematical facts and methods through practice to embed key learning points. I am proficient in teaching Mathematics using practical contexts which learners can easily relate to, while ensuring that they consolidate their learning using tasks and problem solving exercises focussed on deepening understanding.',
  },
  {
    name: 'Dr Stephen Adegbite',
    role: 'Maths and Science',
    text: 'I have the competence and experience to engage and inspire learners in the teaching and learning of Mathematics so that they can develop confidence and achieve their full potentials. I use good questioning strategies to assess students" understanding and progress. My students make significant progress in understanding Mathematics, evidenced by their increased confidence in answering questions and performance improvements in assessments. My teaching approaches enable pupils to easily recall mathematical facts and methods through practice to embed key learning points. I am proficient in teaching Mathematics using practical contexts which learners can easily relate to, while ensuring that they consolidate their learning using tasks and problem solving exercises focussed on deepening understanding.',
  },
]

export default ProfileSlider
