import type {NextPage} from 'next'
import Head from 'next/head'
import {Button} from 'ui'
import Image from 'next/image'
import Navbar from 'ui/components/Navbar'
import SwipeSlider from '../components/SwipeSlider'
import DaisySlide from '../components/DaisySlide'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {useAuth} from 'hooks/auth'
import Link from 'next/link'

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
  const router = useRouter()
  // const [loading, setLoading] = useState(true)
  // const {loading, user} = useAuth({
  //   middleware: 'auth',
  // })
  // const [loggedIn, setLoggedIn] = useState(authCheck)

  return (
    <div className='flex flex-col justify-center items-center h-[90vh] px-3'>
      {/* {console.log(user)} */}

      <a className=''>
        <Image
          src='/logo.png'
          height={42}
          width={305}
          alt='logo'
          className=''
          priority
        />
      </a>
      <p className='text-4xl py-4 pt-32 font-extrabold'>This is a Demo</p>
      <p className='text-3xl'>
        This demo is based on what will happen in the production build
      </p>
      <p className='text-xl'>
        ps: sorry for the delay, we are working non stop to provide a better
        overview
      </p>

      <div className='pt-5'>
        <h2 className='text-4xl py-4 pt-32'> Introduction</h2>

        <p className='mb-5'>
          so there are three main dashboard, the parent dashboard, the teacher
          dashboard and the admin dashboard. click on the links below to view
          the dashboard
        </p>

        <Link href='/DashboardParent'>
          <a className='text-blue-400 underline block '>Parent Dashboard</a>
        </Link>

        <Link href='/DashboardTeacher'>
          <a className='text-blue-400 underline '>Teacher Dashboard</a>
        </Link>
      </div>

      <p>
        <strong>NB</strong> the Signup and signin are available, but this focus
        on the dashboard
      </p>
    </div>
  )
}

export default Home
