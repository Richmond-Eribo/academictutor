import type {NextPage} from 'next'
import Head from 'next/head'
import {Button} from 'ui'
import Image from 'next/image'
import Navbar from 'ui/components/Navbar'
import SwipeSlider from '../components/SwipeSlider'
import DaisySlide from '../components/DaisySlide'

const teacher = [
  {
    name: 'Dr stephen Algbe',
    subject: 'Maths and Science',
    bio: 'My teaching approaches enable pupils to easily recall mathematical facts and methods through practice to embed key learning points. I am proficient in teaching Mathematics using practical contexts which learners can easily relate to, while ensuring that they consolidate their learning using tasks and problem solving exercises focussed on deepening understanding.',
    imageUrl: '/',
  },
  {
    name: 'Dr stephen Algbe',
    subject: 'Maths and Science',
    bio: 'My teaching approaches enable pupils to easily recall mathematical facts and methods through practice to embed key learning points. I am proficient in teaching Mathematics using practical contexts which learners can easily relate to, while ensuring that they consolidate their learning using tasks and problem solving exercises focussed on deepening understanding.',
    imageUrl: '/',
  },
  {
    name: 'Dr stephen Algbe',
    subject: 'Maths and Science',
    bio: 'My teaching approaches enable pupils to easily recall mathematical facts and methods through practice to embed key learning points. I am proficient in teaching Mathematics using practical contexts which learners can easily relate to, while ensuring that they consolidate their learning using tasks and problem solving exercises focussed on deepening understanding.',
    imageUrl: '/',
  },
]

const Home: NextPage = () => {
  return (
    <div className=''>
      {/* {console.log(teacher)} */}
      <Navbar />
      {/* <SwipeSlider TeacherCard={teacher} /> */}
      <DaisySlide />
      <p className='d text-secondary-light text-6xl'>helo</p>
    </div>
  )
}

export default Home
