import type {NextPage} from 'next'
import Head from 'next/head'
import {Button} from 'ui'
import Image from 'next/image'
import Navbar from 'ui/components/Navbar'
import SwipeSlider from '../components/SwipeSlider'
import DaisySlide from '../components/DaisySlide'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

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
  const [loading, setLoading] = useState(true)
  const authCheck = localStorage.getItem('AcademicTutorAuthentication')
    ? JSON.parse(localStorage.getItem('AcademicTutorAuthentication')!)
    : null
  // const [loggedIn, setLoggedIn] = useState(authCheck)

  const funcs = () => {}

  return (
    <>
      <div className={`${authCheck ? 'hidden' : ''}`}>loading</div>

      {authCheck && (
        // (setLoading(false),

        <>
          <p>hi</p>
          {console.log(authCheck)}
        </>
      )}
    </>
  )
}

export default Home
