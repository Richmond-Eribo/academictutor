import Link from 'next/link'
import Input from 'ui/components/Input'

type Props = {
  submitFormParent: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
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

const ParentSignUp = ({
  submitFormParent,
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
    <form onSubmit={submitFormParent}>
      {/* <div className='flex content-around  w-screen lg:flex-row flex-col justify-around items-center'> */}
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
      </section>
      {/* </div> */}

      <button type='submit' className='button sign-button mt-10'>
        sign up
      </button>

      <p className='mt-5 text-center'>
        Already have an account?{' '}
        <Link href='/Login'>
          <a className='text-[#42B9D1] '>Login</a>
        </Link>{' '}
      </p>
    </form>
  )
}

export default ParentSignUp
