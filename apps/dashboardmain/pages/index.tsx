import type {NextPage} from 'next'
// import Head from 'next/head'
// import {Button} from 'ui'
import Image from 'next/image'
// import Navbar from 'ui/components/Navbar'
// import SwipeSlider from '../components/SwipeSlider'
// import DaisySlide from '../components/DaisySlide'
// import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
// import {useAuth} from 'hooks/auth'
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
  // const router = useRouter()
  // const [loading, setLoading] = useState(true)
  // const {loading, user} = useAuth({
  //   middleware: 'guest',
  // })

  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center'>
        <Image
          src='/logo.png'
          height={42 / 1.2}
          width={305 / 1.2}
          alt='logo'
          className=''
          priority
        />
        <p className='mt-10 w-screen text-center font-bold text-3xl'>
          Hi, Welcome to Academic Tutor
        </p>

        <div className='flex mt-10 flex-col justify-between i'>
          <Link href='/Login'>
            <button className='bg-[#42B9D1] button text-15px justify-self-end  p-3 px-5 tracking-wide text-white rounded-md   col-start-2'>
              Login
            </button>
          </Link>

          <Link href='/Signup'>
            <button className='bg-[#42B9D1] my-5 button text-15px justify-self-end  p-3 px-5 tracking-wide text-white rounded-md   col-start-2'>
              Create account
            </button>
          </Link>

          {/* 
          <Link href='/Login'>
            <button className='bg-[#42B9D1] my-5 button text-15px justify-self-end  p-3 px-5 tracking-wide text-white rounded-md   col-start-2'>
              Login Page
            </button>
          </Link>

          <Link href='/SignUp'>
            <button className='bg-[#42B9D1] button text-15px justify-self-end  p-3 px-5 tracking-wide text-white rounded-md   col-start-2'>
              Sign Up page
            </button>
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default Home
