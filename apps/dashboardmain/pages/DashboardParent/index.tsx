import {useAuth} from 'hooks/auth'
import useSWR from 'swr'
import axios from 'lib/axios'
import Logout from 'components/svg/Logout'
import Notification from 'components/svg/Notification'
import Image from 'next/image'
import Link from 'next/link'
import DaisySlide from 'components/DaisySlide'
import LoadingComponent from 'components/LoadingComponent'
import SwipeSlider from 'components/SwipeSlider'
import {useState} from 'react'
import GetInTouchForm from 'components/GetInTouchForm'

const DashboardParent = () => {
  const {loading, user, logout, setLoading} = useAuth({
    middleware: 'auth',
  })

  const [messageInput, setMessage] = useState('')
  const [sentGetInTouch, setSentGetInTouch] = useState(false)
  const {
    data: teachers,
    error: teachersError,
    mutate: teachersMutate,
  } = useSWR('/api/teacher', () =>
    axios
      .get('/api/teacher')
      .then(res => res)
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401)
          throw error
      })
  )

  const {
    data: requests,
    error: requestsError,
    mutate: requestsMutate,
  } = useSWR('/api/parent/requests', () =>
    axios
      .get('/api/parent/requests')
      .then(res => res)
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401)
          throw error
      })
  )

  const request = (teacherID: number) => {
    axios
      .post(`/api/parent/request-teacher`, {teacher_id: teacherID})
      .then(res => res)
      .then(() => requestsMutate())
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401)
          throw error
      })
  }

  const GetInTouch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // console.log('hi')
    setLoading(true)
    axios
      .post(`/api/user/mail-to-admin`, {
        name: user.name,
        email: user.email,
        message: messageInput,
      })
      .then(res => {
        setLoading(false)
        setSentGetInTouch(true)
        setMessage('')
        return res.data
      })
      .then(() => requestsMutate())
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401) {
          setLoading(false)
          setMessage('')
          alert('Hey, your request could not be processed')
          throw error
        }
      })
  }
  // const user = true

  return (
    <>
      {/* {requests && console.log(requests.data, 'hi')} */}
      {user ? (
        <div className='pt-10 '>
          <nav className='flex flex-col md:flex-row items-center  md:justify-between md:items-center pb-10 px-20'>
            <Link href='/'>
              <Image src='/logo.png' width={302} height={47} alt='logo' />
            </Link>

            <div className='flex justify-between px-4 md:mt-2  w-screen md:w-3/12 mt-10'>
              {/* <button>
                <Notification />
              </button> */}

              <button onClick={logout}>
                <Logout />
              </button>

              <p>Welcome {user.name} </p>
            </div>
          </nav>

          <section className=''>
            <p className='px-28 text-tertiary-mid-dark text-[20px] capitalize'>
              available teachers
            </p>

            {teachers?.data.length < 1 && (
              <div className='font-bold text-2xl'>
                There are currently no teachers
              </div>
            )}
            {/* <DaisySlide teachers={teachers?.data} request={request} /> */}
            <SwipeSlider teachers={teachers?.data} request={request} />

            {/* <p>There are no Available Teachers</p> */}
          </section>
          <section className='flex mt-20 flex-col justify-center items-center'>
            <p className='px-28 font-bold text-[20px] capitalize'>
              Get in Touch
            </p>
            {sentGetInTouch ? (
              <div className='bg-primary-light/20 rounded-lg p-5'>
                <p className='text-center mb-3'>Request sent</p>
                <button
                  onClick={() => setSentGetInTouch(false)}
                  className='button sign-button'
                >
                  Send Another Feedback
                </button>
              </div>
            ) : (
              <GetInTouchForm
                message={messageInput}
                setMessage={setMessage}
                submit={e => GetInTouch(e)}
                dashboard
                loadingState={loading}
              />
            )}
          </section>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </>
  )
}

export default DashboardParent
