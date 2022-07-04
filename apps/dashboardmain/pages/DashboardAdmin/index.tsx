// import {useAuth} from 'hooks/auth'

import RequestCard from 'components/RequestCard'
import Logout from 'components/svg/Logout'
import UserCard from 'components/UserCard'
// import Notification from 'components/svg/Notification'
import Image from 'next/image'
import Link from 'next/link'
import {Footer} from 'ui'

const DashboardAdmin = () => {
  // const {loading, user} = useAuth({
  //   middleware: 'auth',
  // })

  const user = true
  return (
    <>
      {user ? (
        <div className=''>
          <nav className='flex flex-col md:flex-row items-center  md:justify-between md:items-center py-5  px-20'>
            <Link href='/'>
              <Image src='/logo.png' width={302} height={47} alt='logo' />
            </Link>

            <div className='flex justify-between px-4 md:mt-2  w-screen md:w-3/12 mt-10'>
              <Link href='/DashboardAdmin'>
                <button>Dashboard</button>
              </Link>

              <Link href='/DashboardAdmin/teacher'>
                <button>Teachers</button>
              </Link>
              {/* <button onClick={logout}> */}
              <Logout />
              {/* </button> */}
            </div>
          </nav>

          <main className='bg-[#F0FBFF] py-5 lg:px-20 px-3'>
            <h1 className='font-bold lg:text-[35px] text-[28px] mb-5'>
              Welcome to the Admin Dashboard
            </h1>

            <div className='flex justify-between flex-col lg:flex-row'>
              <RequestCard />
              <UserCard
                arrayToMap={[
                  'Mrs J. Marie ',
                  'Mrs J. Marie ',
                  'Mrs J. Marie ',
                  'Mrs J. Marie ',
                  'Mrs J. Marie ',
                  'Mrs J. Marie ',
                  'Mrs J. Marie ',
                ]}
                height={'460px'}
                title='Teachers'
                link='/DashboardAdmin/teacher?id=1'
              />
              <UserCard
                arrayToMap={[
                  'Mrs J. Marie ',
                  'Mrs J. Marie ',
                  'Mrs J. Marie ',
                  'Mrs J. Marie ',
                  'Mrs J. Marie ',
                  'Mrs J. Marie ',
                  'Mrs J. Marie ',
                ]}
                height={'460px'}
                title='Parents'
                link='/DashboardAdmin/teacher'
              />
            </div>
          </main>

          <Footer />
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default DashboardAdmin
