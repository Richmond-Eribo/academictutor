import DocumenCard from 'components/DocumenCard'
import Logout from 'components/svg/Logout'
import UserCard from 'components/UserCard'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
// import {useAuth} from 'hooks/auth'

const Slug = () => {
  const router = useRouter()
  const {slug} = router.query
  // const {loading, user} = useAuth({
  //   middleware: 'auth',
  // })

  return (
    <div>
      <nav className='flex flex-col md:flex-row items-center  md:justify-between md:items-center py-5  px-20'>
        <Image src='/logo.png' width={302} height={47} alt='logo' />

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
        <h1 className='font-bold lg:text-[35px] text-[28px] mb-5'>{slug}</h1>

        <div className='flex bg-white pb-5 justify-between flex-col lg:flex-row'>
          <UserCard
            arrayToMap={[
              'Mrs J. Marie ',
              'Mrs J. Marie ',
              'Mrs J. Marie ',
              'Mrs J. Marie ',
              'Mrs J. Marie ',
              'Mrs J. Marie ',
              'Mrs J. Marie ',
              'Mrs J. Marie ',
              'Mrs J. Marie ',
              'Mrs J. Marie ',
              'Mrs J. Marie ',
              'Mrs J. Marie ',
            ]}
            height={550}
            title=''
          />
          <div className='bg-white lg:px-[30px] px-5 lg:w-[800px] py-[30px] '>
            <div className='flex flex-col lg:flex-row lg:items-center'>
              <figure className='lg:w-[154px] h-[110px] w-[110px] mb-2 mr-5  overflow-hidden rounded-full lg:h-[154px] '>
                <Image
                  src='https://api.lorem.space/image/movie?w=200&h=280'
                  width={200}
                  height={280}
                  alt='who'
                />
              </figure>
              <div className='lg:w-[355px]'>
                <h2 className='card-title text-14'>Dr Stephen Adegbite</h2>
                <p className='text-sm -mt-1 mb-2'>Maths and Science</p>
                <p className='text-sm mb-10'>
                  My teaching approaches enable pupils to easily recall
                  mathematical facts and methods through practice to embed key
                  learning points. I am proficient in teaching Mathematics using
                  practical contexts which learners can easily relate to, while
                  ensuring that they consolidate their learning using tasks and
                  problem solving exercises focussed on deepening understanding.
                </p>
              </div>
            </div>

            <div className='scrollbar snap-y overflow-y-scroll h-[340px] lg:w-[525px]'>
              <DocumenCard documentName='RFC' />
              <DocumenCard documentName='Driver license' />
              <DocumenCard documentName='RFC' />
              <DocumenCard documentName='RFC' />
              <DocumenCard documentName='RFC' />
              <DocumenCard documentName='RFC' />
              <DocumenCard documentName='RFC' />
              <DocumenCard documentName='RFC' />
            </div>
          </div>
        </div>
      </main>

      <style jsx>
        {`
          // .scrollbar {
          //   height: 40px;
          // }
          .scrollbar::-webkit-scrollbar {
            width: 8px;
            // height: 0px;
          }

          .scrollbar::-webkit-scrollbar-track {
            // border-radius: 100vh;
            // background: #f7f4ed;
            background: rgb(43 200 237 / 0.05);
            margin-left: 4px;
          }

          .scrollbar::-webkit-scrollbar-thumb {
            background: rgb(43 200 237 / 0.6);
            border-radius: 100vh;
            border: 2px solid #f6f7ed;
          }

          .scrollbar::-webkit-scrollbar-thumb:hover {
            background: #c0a0b9;
          }
        `}
      </style>
    </div>
  )
}

export default Slug
