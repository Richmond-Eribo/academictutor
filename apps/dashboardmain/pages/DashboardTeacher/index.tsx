import {useAuth} from 'hooks/auth'

const DashboardTeacher = () => {
  const {loading, user, logout} = useAuth({
    middleware: 'auth',
  })

  return (
    <div>
      Teacher Dashboard
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default DashboardTeacher
