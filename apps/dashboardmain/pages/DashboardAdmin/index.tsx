import {useAuth} from 'hooks/auth'
import useSWR from 'swr'
import axios from 'lib/axios'
import RequestCard from 'components/RequestCard'
import Logout from 'components/svg/Logout'
import UserCard from 'components/UserCard'
// import Notification from 'components/svg/Notification'
import Image from 'next/image'
import Link from 'next/link'
import {Footer} from 'ui'
import {Requests, User} from 'interfaces/types'
import {useRouter} from 'next/router'
import LoadingComponent from 'components/LoadingComponent'

const DashboardAdmin = () => {
  const {loading, user, logout} = useAuth({
    middleware: 'auth',
  })

  // const user = true
  const router = useRouter()
  const qu = router.query
  const {
    data: teachers,
    error: teacherError,
    mutate: teacherMutate,
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
    data: parents,
    error: parentsError,
    mutate: parentsMutate,
  } = useSWR('/api/parent', () =>
    axios
      .get('/api/parent')
      .then(res => res)
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401)
          throw error
      })
  )

  // get all requests made by parents
  const {
    data: parentsRequests,
    error: parentsRequestsError,
    mutate: parentsRequestsMutate,
  } = useSWR(`/api/admin/requests`, () =>
    axios
      .get(`/api/admin/requests`)
      .then(res => res)
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401)
          throw error
      })
  )

  // const FakeUser: User[]

  return (
    <>
      {/* {console.log(qu)} */}
      {user ? (
        <div className=''>
          <nav className='flex flex-col md:flex-row items-center  md:justify-between md:items-center py-5  px-20'>
            <Link href='/'>
              <a>
                <Image src='/logo.png' width={302} height={47} alt='logo' />
              </a>
            </Link>

            <div className='flex justify-between px-4 md:mt-2  w-screen md:w-3/12 mt-10'>
              <Link href='/DashboardAdmin'>
                <button>Dashboard</button>
              </Link>

              <Link href='/DashboardAdmin/teacher'>
                <button>Teachers</button>
              </Link>
              <button onClick={logout}>
                <Logout />
              </button>
            </div>
          </nav>

          <main className='bg-[#F0FBFF] py-5 lg:px-20 px-3'>
            <h1 className='font-bold lg:text-[35px] text-[28px] mb-5'>
              Welcome to the Admin Dashboard
            </h1>

            <div className='flex justify-between flex-col lg:flex-row'>
              {parentsRequests ? (
                <RequestCard
                  admin
                  requests={parentsRequests.data as Requests[]}
                />
              ) : (
                <div>There are currently no parent requests</div>
              )}
              {/* <>{teachers && console.log(teachers.data)}</> */}
              {/* {<>{console.log(1)}</>} */}
              {teachers ? (
                <UserCard
                  users={teachers!.data}
                  height={'h-[460px]'}
                  title='Teachers'
                  // link='/DashboardAdmin/teacher'
                />
              ) : (
                <div>There are currently no Teachers</div>
              )}

              {parents ? (
                <UserCard
                  users={parents!.data}
                  height={'h-[460px]'}
                  title='Parents'
                  // link='/DashboardAdmin/teacher'
                />
              ) : (
                <div>There are currently no Parents</div>
              )}
            </div>
          </main>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </>
  )
}

export default DashboardAdmin
