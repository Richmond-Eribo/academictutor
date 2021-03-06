import Input from 'ui/components/Input'
import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {useAuth} from '../hooks/auth'
import axios from 'lib/axios'
import Error from 'components/Error'
import Link from 'next/link'
import Image from 'next/image'

const Login = () => {
  const [activeInput, setActiveInput] = useState(0)

  const router = useRouter()

  const {login, loading, user} = useAuth({
    middleware: 'guest',
  })

  useEffect(() => {
    // console.log(router.query)
  }, [router])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<any>(undefined)
  const [status, setStatus] = useState<string | null>(null)

  // useEffect(() => {
  //   if (router.query.reset?.length! > 0 && errors?.length === 0) {
  //     setStatus(window.atob(router.query.reset as string))
  //   } else {
  //     setStatus(null)
  //   }
  // }, [errors, router.query])

  // modal loading state
  // const [loadingModal, setLoadingModal] = useState(false)

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login({setErrors, email, password, setStatus})
  }

  return (
    <div className='lg:grid lg:grid-cols-2 px-10 lg:px-0 md:px-10  h-screen'>
      {/* <>{errors && console.log(errors)}</> */}
      <div className='lg:w-[728px] hidden lg:block  relative'>
        <Image src='/SignUpImage2.png' layout='fill' alt='sign up Image' />
        {/* <>{console.log(loading)}</> */}
      </div>
      {/* {user && console.log('user')} */}
      <form
        onSubmit={submitForm}
        className='flex flex-col justify-center items-center  h-screen'
      >
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

        {/* <section className='lg:w-[400px]  '> */}
        <Error errors={errors} />
        <Input
          type='email'
          setActiveInput={setActiveInput}
          activeInput={activeInput}
          activeNumber={2}
          placeholder='Email'
          marginTop={5}
          value={email}
          setValue={setEmail}
        />

        <Input
          type='password'
          setActiveInput={setActiveInput}
          activeInput={activeInput}
          activeNumber={3}
          placeholder='password'
          marginTop={5}
          value={password}
          setValue={setPassword}
        />

        <div>
          <button type='submit' className='button sign-button  mt-5'>
            sign in
          </button>
        </div>
        <p className='mt-5 text-sm lg:text-base'>
          New on our platform?{' '}
          <Link href='/Signup'>
            <a className='text-[#42B9D1] '>Create an account</a>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
