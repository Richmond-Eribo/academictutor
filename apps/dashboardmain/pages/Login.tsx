import Input from 'ui/components/Input'
import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {useAuth} from '../hooks/auth'
import axios from 'lib/axios'
import Error from 'components/Error'

const Login = () => {
  const [activeInput, setActiveInput] = useState(0)

  const router = useRouter()

  const {login, loading, user} = useAuth({
    middleware: 'guest',
    redirectIfAuthenticatedUrl: '/',
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState<string | null>(null)

  useEffect(() => {
    if (router.query.reset?.length! > 0 && errors.length === 0) {
      setStatus(window.atob(router.query.reset as string))
    } else {
      setStatus(null)
    }
  }, [errors, router.query])

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login({setErrors, email, password, setStatus})
  }

  return (
    <div>
      {/* <Error errors={errors} /> */}

      {/* {user && console.log('user')} */}
      <form onSubmit={submitForm}>
        <div className='flex content-around  w-screen lg:flex-row flex-col justify-around items-center'>
          <section className='lg:w-[400px]  '>
            {/* <Input
              type='name'
              setActiveInput={setActiveInput}
              activeInput={activeInput}
              activeNumber={1}
              placeholder='Full Name'
              marginTop={5}
              value
            /> */}

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

            {/* <Input
              type='text'
              setActiveInput={setActiveInput}
              activeInput={activeInput}
              activeNumber={4}
              placeholder='Address'
              marginTop={5}
            /> */}

            <div className='flex mt-10 mb-2'>
              <p className='text-text-light'>
                Are you currently eligible to work in the Uk?
              </p>
            </div>

            <p className='text-text-light'>
              if yes include work{' '}
              <a className='text-[#42B9D1] underline'> Permit or ID</a>
            </p>
          </section>

          <section className='w-[400px] my-10 lg:my-0 bg-yellow-300'>
            this is two
          </section>

          <section className='w-[400px] bg-slate-500'>
            this just might be
          </section>
        </div>

        <button type='submit' className='button sign-button mt-10'>
          sign up
        </button>
      </form>
    </div>
  )
}

export default Login
