import DocumenCard from 'components/DocumenCard'
import Logout from 'components/svg/Logout'
import UserCard from 'components/UserCard'
import Image from 'next/image'
import {useRouter} from 'next/router'

const Slug = () => {
  const router = useRouter()
  const {slug} = router.query

  return (
    <div>
      <nav className='flex flex-col md:flex-row items-center  md:justify-between md:items-center py-5  px-20'>
        <Image src='/logo.png' width={302} height={47} alt='logo' />

        <div className='flex justify-between px-4 md:mt-2  w-screen md:w-3/12 mt-10'>
          <button>Dashboard</button>
          {/* <button onClick={logout}> */}
          <Logout />
          {/* </button> */}
        </div>
      </nav>

      <main className='bg-[#F0FBFF] py-5 lg:px-20 px-3'>
        <h1 className='font-bold lg:text-[35px] text-[28px] mb-5'>{slug}</h1>

        <div className='flex justify-between'>
          <UserCard title='' />
          <div className='bg-white lg:px-[30px] lg:w-[800px] py-[30px] '>
            <div className=''>
              <figure className='lg:w-[110px] mb-2   overflow-hidden rounded-full lg:h-[110px] '>
                <Image
                  src='https://api.lorem.space/image/movie?w=200&h=280'
                  width={200}
                  height={280}
                  alt='who'
                />
              </figure>
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

            <div>
              <DocumenCard documentName='RFC' />
              <DocumenCard documentName='Driver license' />
              <DocumenCard documentName='RFC' />
              <DocumenCard documentName='RFC' />
              <DocumenCard documentName='RFC' />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Slug
