import Link from 'next/link'

import React, {useState} from 'react'
import Input from './Input'
type Props = {}

const SignUpParent = (props: Props) => {
  const [activeInput, setActiveInput] = useState(0)
  return (
    <form>
      <Input
        type='name'
        setActiveInput={setActiveInput}
        activeInput={activeInput}
        activeNumber={2}
        placeholder='Full Name'
        marginTop={5}
      />

      <Input
        type='email'
        setActiveInput={setActiveInput}
        activeInput={activeInput}
        activeNumber={2}
        placeholder='Email'
        marginTop={5}
      />

      <Input
        type='password'
        setActiveInput={setActiveInput}
        activeInput={activeInput}
        activeNumber={2}
        placeholder='Password'
        marginTop={5}
      />
      <button className='button sign-button mt-10'>sign up</button>

      <p className='mt-5 text-center'>
        Already have an account?{' '}
        <Link href='/SignIn'>
          <a className='text-[#42B9D1] '>Login</a>
        </Link>{' '}
      </p>
    </form>
  )
}

export default SignUpParent
