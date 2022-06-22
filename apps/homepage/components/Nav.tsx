import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'

type Props = {}

const Nav = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className='flex bg-white lg:h-[70px]  lg:flex-row justify-between   items-center pb-4 px-2  md:mb-8 md:px-5 lg:mb-10 lg:px-10 rounded-md'>
        {/* hamburger menu */}
        <div
          className='lg:hidden   rounded  p-1'
          onClick={() => setMenuOpen(current => !current)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            role='img'
            width='2em'
            height='2em'
            preserveAspectRatio='xMidYMid meet'
            viewBox='0 0 15 15'
            className={`${!menuOpen ? '' : 'hidden'}`}
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H13C13.2652 0 13.5196 0.105357 13.7071 0.292893C13.8946 0.48043 14 0.734784 14 1C14 1.26522 13.8946 1.51957 13.7071 1.70711C13.5196 1.89464 13.2652 2 13 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1ZM0 6C0 5.73478 0.105357 5.48043 0.292893 5.29289C0.48043 5.10536 0.734784 5 1 5H13C13.2652 5 13.5196 5.10536 13.7071 5.29289C13.8946 5.48043 14 5.73478 14 6C14 6.26522 13.8946 6.51957 13.7071 6.70711C13.5196 6.89464 13.2652 7 13 7H1C0.734784 7 0.48043 6.89464 0.292893 6.70711C0.105357 6.51957 0 6.26522 0 6ZM0 11C0 10.7348 0.105357 10.4804 0.292893 10.2929C0.48043 10.1054 0.734784 10 1 10H13C13.2652 10 13.5196 10.1054 13.7071 10.2929C13.8946 10.4804 14 10.7348 14 11C14 11.2652 13.8946 11.5196 13.7071 11.7071C13.5196 11.8946 13.2652 12 13 12H1C0.734784 12 0.48043 11.8946 0.292893 11.7071C0.105357 11.5196 0 11.2652 0 11Z'
              fill='black'
            />
          </svg>

          <svg
            width='2em'
            height='2em'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={`${menuOpen ? '' : 'hidden'}`}
          >
            <path
              d='M2.64004 1.27L7.50004 6.13L12.34 1.29C12.4249 1.19972 12.527 1.12749 12.6405 1.07766C12.7539 1.02783 12.8762 1.00141 13 1C13.2653 1 13.5196 1.10536 13.7071 1.29289C13.8947 1.48043 14 1.73478 14 2C14.0024 2.1226 13.9796 2.24439 13.9332 2.35788C13.8868 2.47138 13.8176 2.57419 13.73 2.66L8.84004 7.5L13.73 12.39C13.8949 12.5512 13.9915 12.7696 14 13C14 13.2652 13.8947 13.5196 13.7071 13.7071C13.5196 13.8946 13.2653 14 13 14C12.8726 14.0053 12.7454 13.984 12.6267 13.9375C12.5079 13.8911 12.4001 13.8204 12.31 13.73L7.50004 8.87L2.65004 13.72C2.56555 13.8073 2.46461 13.8769 2.35304 13.925C2.24148 13.9731 2.12151 13.9986 2.00004 14C1.73482 14 1.48047 13.8946 1.29293 13.7071C1.1054 13.5196 1.00004 13.2652 1.00004 13C0.997709 12.8774 1.02046 12.7556 1.06689 12.6421C1.11332 12.5286 1.18245 12.4258 1.27004 12.34L6.16004 7.5L1.27004 2.61C1.10523 2.44876 1.00858 2.23041 1.00004 2C1.00004 1.73478 1.1054 1.48043 1.29293 1.29289C1.48047 1.10536 1.73482 1 2.00004 1C2.24004 1.003 2.47004 1.1 2.64004 1.27Z'
              fill='black'
            />
          </svg>
        </div>

        {/* logo */}

        <figure className=' lg:pt-5'>
          <Image
            src='/logo.png'
            height={42 / 1.2}
            width={305 / 1.2}
            alt='logo'
          />
        </figure>

        {/* logo end */}

        {/* Nav links for laptop */}
        <div className=' hidden flex-col lg:block lg:pt-5'>
          {['About us', 'Services', 'Teachers'].map(Navlink => (
            <a
              key={Navlink}
              href={`#${Navlink}`}
              className='lg:ml-6 md:ml-3 text-15px'
            >
              {Navlink}
            </a>
          ))}

          <Link href='/SignUp'>
            <button className='bg-[#42B9D1] md:w-[120px] md:h-[35px]  button text-15px md:px-4 lg:px-5 tracking-wide text-white rounded-md md:ml-10 md:mr-4 lg:ml-16 lg:mr-6'>
              SignUp
            </button>
          </Link>
          <Link href='/SignIn'>
            <button className='bg-[#42B9D1]/20 md:w-[120px] md:h-[35px]  text-15px text-[#42B9D1] border-2 border-[#42B9D1] button  md:px-4 lg:px-5 tracking-wide  rounded-md'>
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* nav links for mobile */}
      <div
        className={`grid  grid-cols-1 gap-2 place-items-center  lg:hidden ${
          menuOpen ? 'h-32 ' : 'invisible h-0'
        }`}
      >
        {['About us', 'Services'].map(Navlink => (
          <Link href='' key={Navlink}>
            <a className='lg:ml-6 md:ml-3  text-center'>{Navlink} </a>
          </Link>
        ))}

        <Link href='/SignUp'>
          <button className='bg-[#42B9D1]  w-[120px] h-[35px]  button text-15px  tracking-wide text-white rounded-md  '>
            SignUp
          </button>
        </Link>

        <Link href='/SignIn'>
          <button className='bg-[#42B9D1]/20 w-[120px] h-[35px]  text-15px text-[#42B9D1] border-2 border-[#42B9D1] button  tracking-wide  rounded-md'>
            Login
          </button>
        </Link>
      </div>
    </>
  )
}

export default Nav
