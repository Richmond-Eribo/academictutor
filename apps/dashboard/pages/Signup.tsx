import React, {useState, useEffect, FC} from 'react'
import {useRouter} from 'next/router'
import {useAuth} from '../hooks/auth'
import axios from 'lib/axios'
import AuthLayout from 'components/auth/AuthLayout'
import ParentSignUp from 'components/SignUp/ParentSignUp'
import TeacherSignUp from 'components/SignUp/TeacherSignUp'
import Image from 'next/image'
import Link from 'next/link'

const Signup: FC = () => {
  const [tab, setTab] = useState(1)

  const [activeInput, setActiveInput] = useState(0)

  const router = useRouter()

  const {register} = useAuth({
    middleware: 'guest',
    redirectIfAuthenticatedUrl: '/',
  })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState<number>()
  //   const [role, setRole] = useState('parent')
  const role = 'parent'
  const [phone, setPhone] = useState<number | undefined>()
  //   const [profile_picture, setProfile_picture] = useState(null)
  const profile_picture = null
  const [errors, setErrors] = useState([])

  const submitFormTeacher = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    register({
      setErrors,
      name,
      email,
      password,
      phone,
      profile_picture,
      role,
    })
  }

  return (
    <AuthLayout>
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
            <TeacherSignUp
              submitFormTeacher={submitFormTeacher}
              setActiveInput={setActiveInput}
              setName={setName}
              setPhone={setPhone}
              setEmail={setEmail}
              setPassword={setPassword}
              password={password!}
              activeInput={activeInput}
              name={name}
              email={email}
              phone={phone}
            />
          </div>
          <div className={`${tab == 1 ? 'hidden' : 'block'} `}>
            <ParentSignUp
              submitFormTeacher={submitFormTeacher}
              setActiveInput={setActiveInput}
              setName={setName}
              setPhone={setPhone}
              setEmail={setEmail}
              setPassword={setPassword}
              password={password!}
              activeInput={activeInput}
              name={name}
              email={email}
              phone={phone}
            />
          </div>
        </main>
      </div>
    </AuthLayout>
  )
}

export default Signup
