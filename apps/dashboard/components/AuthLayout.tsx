import {ReactNode, useEffect} from 'react'
import {useRouter} from 'next/router'

type Props = {
  children: ReactNode
}

const AuthLayout = ({children}: Props) => {
  const router = useRouter()

  useEffect(() => {
    const authCheck = localStorage.getItem('AcademicTutorAuthentication')
      ? JSON.parse(localStorage.getItem('AcademicTutorAuthentication')!)
      : null

    authCheck && router.push('/')
  }, [router])

  return <div>{children}</div>
}

export default AuthLayout
