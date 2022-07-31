import Error from 'components/Error'
import axios from 'lib/axios'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import Input from 'ui/components/Input'

const ForgetPassword = () => {
  const router = useRouter()
  const query = router.query

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setpassword_confirmation] = useState('')
  const [activeInput, setActiveInput] = useState(0)
  const [misMatch, setMisMatch] = useState(false)
  const [errors, setErrors] = useState<any>('')

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    const token = query.token
    event.preventDefault()
    if (token) {
      if (password === password_confirmation) {
        axios
          .post('/api/user/reset-password', {
            email,
            password,
            password_confirmation,
            token,
          })
          .then(res => alert(res.data.status))
          .catch(error => {
            if (
              error.response.status !== 422 ||
              error.response.status === 401 ||
              error.response.status === 500
            ) {
              setErrors(error.response.data.status)
              throw error
            }
          })
      } else setMisMatch(true)
    } else {
      alert('you need to get a token')
    }

    setTimeout(() => {
      setMisMatch(false)
    }, 3000)
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center  h-screen'>
        <form onSubmit={submitForm}>
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

          <>{errors && console.log(errors)}</>
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
            placeholder='Password'
            marginTop={5}
            value={password}
            setValue={setPassword}
          />

          <Input
            type='password'
            setActiveInput={setActiveInput}
            activeInput={activeInput}
            activeNumber={4}
            placeholder='Confirm password'
            marginTop={5}
            value={password_confirmation}
            setValue={setpassword_confirmation}
          />
          {misMatch && (
            <p className='text-secondary-dark mt-3 text-center'>
              Passwords do not match
            </p>
          )}
          <button type='submit' className='button sign-button  my-5'>
            sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword
