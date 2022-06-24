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
  const {loading, user} = useAuth({
    middleware: 'auth',
  })
  // const [loggedIn, setLoggedIn] = useState(authCheck)

  return (
    <>
      {console.log(user)}
      <p>hi</p>
    </>
  )
}

export default Home