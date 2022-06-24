import AuthLayout from 'components/auth/AuthLayout'
import {useAuth} from 'hooks/auth'

const DashboardTeacher = () => {
  const {logout} = useAuth({middleware: 'auth'})
  return (
    <AuthLayout>
      Teacher Dashboard
      <button onClick={logout}>logout</button>
    </AuthLayout>
  )
}

export default DashboardTeacher
