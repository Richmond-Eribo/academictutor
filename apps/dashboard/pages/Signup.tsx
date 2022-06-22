import React, {useState, useEffect, FC} from 'react'
import {useRouter} from 'next/router'
import {useAuth} from '../hooks/auth'
import Input from 'ui/components/Input'
import axios from 'lib/axios'
import AuthLayout from 'components/AuthLayout'

const Signup: FC = () => {
  const [activeInput, setActiveInput] = useState(0)

  const router = useRouter()

  const {register, user} = useAuth({
    middleware: 'guest',
    redirectIfAuthenticatedUrl: '/',
  })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState<number>()
  //   const [role, setRole] = useState('parent')
  const role = 'parent'
  const [phone, setPhone] = useState<number>(0)
  //   const [profile_picture, setProfile_picture] = useState(null)
  const profile_picture = null
  const [errors, setErrors] = useState([])

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
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
      <div>
        {/* <div className=''>{console.log('ji')}</div> */}
        {/* {errors.length > 0 && errors.map(error => console.log(error))} */}
        <form onSubmit={submitForm}>
          <div className='flex content-around  w-screen lg:flex-row flex-col justify-around items-center'>
            <section className='lg:w-[400px]  '>
              {/* name */}

              <Input
                type='name'
                setActiveInput={setActiveInput}
                activeInput={activeInput}
                activeNumber={1}
                placeholder='Full Name'
                marginTop={5}
                value={name}
                setValue={setName}
              />

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
                type='number'
                setActiveInput={setActiveInput}
                activeInput={activeInput}
                activeNumber={2}
                placeholder='Email'
                marginTop={5}
                value={phone}
                setValue={setPhone}
              />

              <Input
                type='password'
                setActiveInput={setActiveInput}
                activeInput={activeInput}
                activeNumber={3}
                placeholder='password'
                marginTop={5}
                value={password!}
                setValue={setPassword}
              />

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
          </div>

          <button
            type='submit'
            className='button bg-gray-700 text-white sign-button mt-10'
          >
            sign up
          </button>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Signup
