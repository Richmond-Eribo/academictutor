import axios from 'lib/axios'
import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import useSWR from 'swr'
// import {fileURLToPath} from 'url'

declare type AuthMiddleware = 'auth' | 'guest'

interface IUseAuth {
  middleware: AuthMiddleware
  redirectIfAuthenticatedTeacher?: string
  redirectIfAuthenticatedParent?: string
  redirectIfAuthenticatedAdmin?: string
}

interface IApiRequest {
  setErrors: React.Dispatch<React.SetStateAction<any>>
  setStatus?: React.Dispatch<React.SetStateAction<string | null>>
  [key: string]: any
}

export const useAuth = (config: IUseAuth) => {
  const router = useRouter()

  const {
    middleware,
    redirectIfAuthenticatedTeacher = '/DashboardTeacher',
    redirectIfAuthenticatedAdmin = '/DashboardAdmin/',
    redirectIfAuthenticatedParent = '/DashboardParent',
  } = config

  // isLoading
  const [loading, setLoading] = useState(true)

  // Getting cookie from sanctum
  const csrf = () => axios.get('/sanctum/csrf-cookie')
  // gets the varible stored in local storage if it exist, it not sets authCheck to null
  // const authCheck = localStorage.getItem('AcademicTutorAuthentication')
  //   ? JSON.parse(localStorage.getItem('AcademicTutorAuthentication')!)
  //   :

  //   user
  const {
    data: user,
    error,
    mutate,
  } = useSWR('/api/user', () =>
    axios
      .get(`/api/user`)
      .then(res => res.data)
      .catch(error => {
        // if (error.response.status !== 409 || error.response.status === 401)
        //   throw error

        if (
          (error.response.status !== 409 || error.response.status === 401) &&
          router.pathname !== '/Signup'
        ) {
          if (router.pathname !== '/AdminSignUpPage') router.push('/Login')
          throw error
        }
        // console.log(error)
      })
  )

  // Register new user
  const register = async ({setErrors, ...props}: IApiRequest) => {
    // await csrf()
    setErrors([])
    const checkEmail = await axios.get(`/api/user/exist/${props.email}`)
    const checkPhone = await axios.get(`/api/user/exist/${props.phone}`)

    const checkEmailData = await checkEmail.data
    const checkPhoneData = await checkPhone.data

    console.log(checkPhoneData, checkEmailData)

    if (checkEmailData === 1) {
      setErrors('Email already exist, try again')
    } else if (checkPhoneData === 1) {
      setErrors('Phone Number already exist, try again')
    } else {
      axios
        .post('/api/user/register', props, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(response => {
          if (response.status) {
            router.push({
              pathname: '/Login',
              query: {
                slug: 'registerRedirect',
              },
            })
          }
        })
        .then(() => mutate())
        .catch(error => {
          if (error.response.status !== 422) throw error

          setErrors(Object.values(error.response.data.errors).flat())
        })
    }
  }

  // Login user
  const login = async ({setErrors, setStatus, ...props}: IApiRequest) => {
    await csrf()
    setErrors([])
    setStatus!(null)

    // route
    axios
      .post('/login', props)
      .then(res => res.data)
      .then(() => mutate())
      .catch(error => {
        if (error.response.status !== 422 || error.response.status === 401) {
          setErrors(error.response.data.message)
          throw error
        }
      })
  }

  const logout = async () => {
    if (!error) {
      await axios.post('/logout').then(() => mutate())
    }
    window.location.pathname = '/Login' as any
  }

  // this checks if user is true then  checks for user role.
  useEffect(() => {
    if (
      (middleware === 'guest' || middleware === 'auth') &&
      user &&
      user.role === 'parent'
    )
      router.push(redirectIfAuthenticatedParent)
    if (
      (middleware === 'guest' || middleware === 'auth') &&
      user?.role === 'teacher'
    )
      router.push(redirectIfAuthenticatedTeacher)
    if (
      (middleware === 'guest' || middleware === 'auth') &&
      user?.role === 'admin'
    ) {
      if (router.pathname !== `/DashboardAdmin/[slug]`)
        router.push(redirectIfAuthenticatedAdmin)
    }

    //  if (router.isReady) {
    //     if (router.query === {slug: String}) {
    //       alert('hi')
    //     } else {
    //       console.log(router.query)
    //     }
    //   }

    if (middleware === 'auth' && error) logout()
    setLoading(false)

    return () => {
      setLoading(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user!])

  return {
    user,
    register,
    login,
    logout,
    loading,
    config,
  }
  // forgot password
  // const forgotPassword = async ({setErrors, setStatus, email}) => {
  //   await csrf()

  //   setErrors([])
  //   setStatus(null)

  //   // route
  //   axios
  //     .post('/api/user/forgot-password', {email})
  //     .then(response => setStatus(response.data.status))
  //     .catch(error => {
  //       if (error.response.status !== 422) throw error

  //       setErrors(Object.values(error.response.data.errors).flat())
  //     })
  // }

  // reset password
  // const resetPassword = async ({setErrors, setStatus, ...props}) => {
  //   await csrf()

  //   setErrors([])
  //   setStatus(null)

  //   axios
  //     .post('/api/user/reset-password', {token: router.query.token, ...props})
  //     .then(response => router.push(''))
  // }
}
function elseif(arg0: boolean) {
  throw new Error('Function not implemented.')
}
