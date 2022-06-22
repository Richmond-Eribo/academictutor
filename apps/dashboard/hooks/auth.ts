import axios from 'lib/axios'
import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import useSWR from 'swr'

declare type AuthMiddleware = 'auth' | 'guest'

interface IUseAuth {
  middleware: AuthMiddleware
  redirectIfAuthenticatedUrl?: string
}

interface IApiRequest {
  setErrors: React.Dispatch<React.SetStateAction<never[]>>
  setStatus?: React.Dispatch<React.SetStateAction<string | null>>
  [key: string]: any
}

export const useAuth = (config: IUseAuth) => {
  const router = useRouter()

  const {middleware, redirectIfAuthenticatedUrl = '/'} = config

  // isLoading
  const [loading, setLoading] = useState(true)

  // Getting cookie from sanctum
  const csrf = () => axios.get('/sanctum/csrf-cookie')
  //   user
  const {
    data: user,
    error,
    mutate,
  } = useSWR('/api/user/', () => {
    axios
      .get('api/user/')
      .then(res => res.data)
      .catch(error => {
        if (error.response.status !== 409) throw error

        router.push('/')
      })
  })

  // Register new user
  const register = async ({setErrors, ...props}: IApiRequest) => {
    await csrf()
    setErrors([])
    console.log('register')

    // route
    axios
      .post('/api/user/register', props)
      .then(() => mutate())
      .catch(error => {
        if (error.response.status !== 422) throw error

        setErrors(Object.values(error.response.data.errors).flat() as never[])
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
      .then(() => router.push('/DashboardTeacher'))
      .then(() => axios.get('api/user/').then(res => console.log(res.data)))
      .catch(error => {
        if (error.response.status !== 422) throw error

        setErrors(Object.values(error.response.data.errors).flat() as never[])
      })
  }

  const logout = async () => {
    if (!error) {
      await axios.post('/logout').then(() => mutate())
    }
    window.location.pathname = '/Login'
  }

  useEffect(() => {
    if (middleware === 'guest' && user) router.push(redirectIfAuthenticatedUrl!)
    if (middleware === 'auth' && error) logout()
    setLoading(false)

    return () => {
      setLoading(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [middleware, redirectIfAuthenticatedUrl, router, user, error])

  return {
    user,
    register,
    login,
    logout,
    loading,
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
