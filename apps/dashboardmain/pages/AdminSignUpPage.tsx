import AdminSignUp from 'components/SignUp/AdminSignUp'
import Image from 'next/image'
import React, {useState, useEffect, FC} from 'react'
import {useAuth} from '../hooks/auth'

const AdminSignUpPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState<number>()
  const [phone, setPhone] = useState<number>()
  const [activeInput, setActiveInput] = useState(0)
  const [errors, setErrors] = useState([])

  const {register, user} = useAuth({
    middleware: 'guest',
  })

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    register({
      setErrors,
      name,
      email,
      password,
      phone,
      profile_picture: null,
      role: 'admin',
    })
  }
  return (
    <div className='flex justify-center items-center flex-col pt-10'>
      <figure className='w-[310px] mx-auto'>
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
      </figure>
      <AdminSignUp
        submitForm={submitForm}
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
  )
}

export default AdminSignUpPage
