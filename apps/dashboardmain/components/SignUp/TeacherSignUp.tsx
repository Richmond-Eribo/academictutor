import React, {useState} from 'react'
import Input from 'ui/components/Input'

type Props = {
  submitFormTeacher: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  setActiveInput: React.Dispatch<React.SetStateAction<number>>
  setName: React.Dispatch<React.SetStateAction<any>>
  setEmail: React.Dispatch<React.SetStateAction<any>>
  setPhone: React.Dispatch<React.SetStateAction<any>>
  setPassword: React.Dispatch<React.SetStateAction<any>>
  activeInput: number
  name: string
  email: string
  phone: number | undefined
  password: number
}

const TeacherSignUp = ({
  submitFormTeacher,
  setActiveInput,
  setName,
  setPhone,
  setEmail,
  setPassword,
  password,
  activeInput,
  name,
  email,
  phone,
}: Props) => {
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
            type='tel'
            setActiveInput={setActiveInput}
            activeInput={activeInput}
            activeNumber={2}
            placeholder='phone'
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

        <section className='w-[400px] my-10 lg:my-0 bg-yellow-300'>
          this is two
        </section>

        <section className='w-[400px] bg-slate-500'>
          <p className=''>Disclaimer</p>
          <p className=''>
            Academic tutors are required by law to safeguard our tutees, and we
            expect you to be part of this. By submitting the following
            information, you agree to abide by the rules and regulations of our
            business organisation. You also agree that all the information you
            provided are true and that you agree that by providing false
            information, Academic tutors reserve the right to inform the
            relevant authority in accordance with statutory regulation and law.
          </p>
        </section>
      </div>

      <button className='button sign-button mt-10'>sign up</button>
    </form>
  )
}

export default TeacherSignUp
