// import {useAuth} from 'hooks/auth'
// import useSWR from 'swr'
// import axios from 'lib/axios'
import Logout from 'components/svg/Logout'
import Notification from 'components/svg/Notification'
import Image from 'next/image'
// import DaisySlide from 'components/DaisySlide'
import {GetInTouchForm} from 'ui'

const DashboardParent = () => {
  // const {loading, user, logout} = useAuth({
  //   middleware: 'auth',
  // })

  // const {
  //   data: teacher,
  //   error: teacherError,
  //   mutate: teacherMutate,
  // } = useSWR('/api/teacher/', () =>
  //   axios
  //     .get('/api/teacher/')
  //     .then(res => res)
  //     .catch(error => {
  //       if (error.response.status !== 409 || error.response.status == 401)
  //         throw error
  //     })
  // )
  const user = true

  return (
    <>
      {user ? (
        <div className='pt-10 '>
          <nav className='flex flex-col md:flex-row items-center  md:justify-between md:items-center pb-10 px-20'>
            <Image src='/logo.png' width={302} height={47} alt='logo' />

            <div className='flex justify-between px-4 md:mt-2  w-screen md:w-3/12 mt-10'>
              <button>
                <Notification />
              </button>

              {/* <button onClick={logout}> */}
              <Logout />
              {/* </button> */}

              <p>Welcome Mrs Lawrence </p>
            </div>
          </nav>

          <section className=''>
            <p className='px-28 text-tertiary-mid-dark text-[20px] capitalize'>
              available teachers
            </p>

            {/* <DaisySlide /> */}
            <p>There are no Available Teachers</p>
          </section>
          <section className='flex mt-20 flex-col justify-center items-center'>
            <p className='px-28 font-bold text-[20px] capitalize'>
              Get in Touch
            </p>
            <GetInTouchForm />
          </section>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  )
}

export default DashboardParent
