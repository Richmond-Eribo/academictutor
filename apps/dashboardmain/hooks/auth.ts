import axios from 'lib/axios'
import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import useSWR from 'swr'

declare type AuthMiddleware = 'auth' | 'guest'

interface IUseAuth {
  middleware: AuthMiddleware
  redirectIfAuthenticatedTeacher?: string
  redirectIfAuthenticatedParent?: string
  redirectIfAuthenticatedAdmin?: string
}

interface IApiRequest {
  setErrors: React.Dispatch<React.SetStateAction<[] | undefined>>
  setStatus?: React.Dispatch<React.SetStateAction<string | null>>
  [key: string]: any
}

export const useAuth = (config: IUseAuth) => {
  const router = useRouter()

  const {
    middleware,
    redirectIfAuthenticatedTeacher = '/DashboardTeacher',
    redirectIfAuthenticatedAdmin = '/DashboardAdmin',
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
  } = useSWR('/api/user/', () =>
    axios
      .get(`/api/user/`)
      .then(res => res.data)
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401)
          throw error
        router.push('/Login')
      })
  )

  // Register new user
  const register = async ({setErrors, ...props}: IApiRequest) => {
    await csrf()
    setErrors([])

    // route
    axios
      .post('/api/user/register', props)
      .then(response => {
        if (response.status == 200) {
          router.push({
            pathname: '/Login',
            query: 'registerRedirect',
          })
          // console.log(response.data)
        }
      })
      .then(() => mutate())
      .catch(error => {
        if (error.response.status !== 422) throw error

        setErrors(Object.values(error.response.data.errors).flat() as [])
      })
  }

  // Login user
  const login = async ({setErrors, setStatus, ...props}: IApiRequest) => {
    await csrf()
    setErrors([])
    setStatus!(null)

    // route
    axios
      .post('/login', props)
      .then(() => mutate())
      .catch(error => {
        if (error.response.status !== 422) throw error
        setErrors(Object.values(error.response.data.errors).flat() as [])
      })
  }

  const logout = async () => {
    if (!error) {
      await axios.post('/logout').then(() => mutate())
    }
    window.location.pathname = '/Login'
  }

  useEffect(() => {
    if (
      (middleware === 'guest' || middleware === 'auth') &&
      user?.role === 'parent'
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
    )
      router.push(redirectIfAuthenticatedAdmin)

    if (middleware === 'auth' && error) logout()
    setLoading(false)

    return () => {
      setLoading(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [middleware, router, user, error])

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
