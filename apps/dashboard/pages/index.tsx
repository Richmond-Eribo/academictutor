import type {NextPage} from 'next'
import Head from 'next/head'
import {Button} from 'ui'
import Image from 'next/image'
import Navbar from 'ui/components/Navbar'
import SwipeSlider from '../components/SwipeSlider'
import DaisySlide from '../components/DaisySlide'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {useAuth} from '../hooks/auth'

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
  const {logout} = useAuth({
    middleware: 'guest',
    redirectIfAuthenticatedUrl: '/',
  })

  const [authChecked, setauthChecked] = useState<{
    role: string
    id: number
  } | null>(null)

  useEffect(() => {
    const authCheck = localStorage.getItem('AcademicTutorAuthentication')
      ? JSON.parse(localStorage.getItem('AcademicTutorAuthentication')!)
      : null
    setauthChecked(authCheck)

    !authCheck && router.push('/Login')

    if (authCheck && authCheck.role == 'teacher') {
      router.push('/DashboardTeacher')
    } else if (authCheck && authCheck.role == 'parent') {
      router.push('/DashboardParent')
    } else if (authCheck && authCheck.role == 'admin') {
      router.push('/DashboardAdmin')
    } else {
      router.push('/Login')
    }
  }, [router])

  return (
    <>
      <div className={`${authChecked ? 'hidden' : ''}`}>loading</div>

      {/* {authChecked && (
        // (setLoading(false),

        <>
          <Link href='/Login'>
            <a>Login</a>
          </Link>

          <button onClick={logout}>logout</button>
          <p>hi</p>
          {console.log(authChecked)}
        </>
      )} */}
    </>
  )
}

export default Home
