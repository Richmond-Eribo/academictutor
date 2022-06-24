import {useAuth} from 'hooks/auth'

const DashboardAdmin = () => {
  const {loading, user} = useAuth({
    middleware: 'auth',
  })
  return <>{console.log(user)}</>
}

export default DashboardAdmin
