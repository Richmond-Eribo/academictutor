import {useAuth} from 'hooks/auth'

const DashboardParent = () => {
  const {loading, user} = useAuth({
    middleware: 'auth',
  })
  return <>{console.log(user)}</>
}

export default DashboardParent
