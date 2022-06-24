import React, {useState} from 'react'
import Image from 'next/image'
import SignUpParent from './SignUpParent'
import SignUpTeacher from './SignUpTeacher'
import Link from 'next/link'

type Props = {}

const SignUp = (props: Props) => {
  const [tab, setTab] = useState(1)
  return (
    <div className='py-10 px-4'>
      <figure className='w-[310px] mx-auto'>
        <Link href='/'>
          <>
            <a className='hidden lg:block'>
              <Image
                src='/logo.png'
                height={42}
                width={305}
                alt='logo'
                className=''
                priority
              />
            </a>

            <a className='block lg:hidden'>
              <Image
                src='/logo.png'
                height={42 / 1.2}
                width={305 / 1.2}
                alt='logo'
                className=''
                priority
              />
            </a>
          </>
        </Link>
      </figure>

      <div className='flex justify-center my-5 '>
        <p
          onClick={() => setTab(1)}
          className={`   py-3 px-4 border-t-2 cursor-pointer ${
            tab == 1
              ? ' border-t-[#42B9D1] text-[#42B9D1]'
              : 'border-t-[#BFC7D3] text-[#BFC7D3] text-xs'
          }`}
        >
          Sign up as a Teacher
        </p>
        <p
          onClick={() => setTab(2)}
          className={` py-3 px-4 border-t-2 cursor-pointer ${
            tab == 2
              ? ' border-t-[#42B9D1] text-[#42B9D1]'
              : 'border-t-[#BFC7D3] text-[#BFC7D3] text-xs'
          }`}
        >
          Sign up as a Parent
        </p>
      </div>

      <main className='flex justify-center'>
        <div className={`${tab == 2 ? 'hidden' : 'block'}`}>
          <SignUpTeacher />
        </div>
        <div className={`${tab == 1 ? 'hidden' : 'block'} `}>
          <SignUpParent />
        </div>
      </main>
    </div>
  )
}

export default SignUp
