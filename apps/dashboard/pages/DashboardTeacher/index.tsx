import {useAuth} from 'hooks/auth'

const DashboardTeacher = () => {
  const {logout} = useAuth({middleware: 'auth'})
  return (
    <div>
      Teacher Dashboard
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default DashboardTeacher
