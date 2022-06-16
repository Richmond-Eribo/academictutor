import React, {useState} from 'react'
import Input from './Input'

type Props = {}

const SignUpTeacher = (props: Props) => {
  const [activeInput, setActiveInput] = useState(0)
  return (
    <form>
      <div className='flex content-around  w-screen lg:flex-row flex-col justify-around items-center'>
        <section className='lg:w-[400px]  '>
          <Input
            type='name'
            setActiveInput={setActiveInput}
            activeInput={activeInput}
            activeNumber={1}
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
            type='tel'
            setActiveInput={setActiveInput}
            activeInput={activeInput}
            activeNumber={3}
            placeholder='phone'
            marginTop={5}
          />

          <Input
            type='text'
            setActiveInput={setActiveInput}
            activeInput={activeInput}
            activeNumber={4}
            placeholder='Address'
            marginTop={5}
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

        <section className='w-[400px] my-10 lg:my-0 bg-yellow-300'>
          this is two
        </section>

        <section className='w-[400px] bg-slate-500'>this just might be</section>
      </div>

      <button className='button sign-button mt-10'>sign up</button>
    </form>
  )
}

export default SignUpTeacher
