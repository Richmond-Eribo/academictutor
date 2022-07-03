import Logout from 'components/svg/Logout'
import Notification from 'components/svg/Notification'
// import {useAuth} from 'hooks/auth'
import Image from 'next/image'
import Link from 'next/link'

const DashboardTeacher = () => {
  // const {loading, user, logout} = useAuth({
  //   middleware: 'auth',
  // })

  const user = true

  return (
    <>
      {user ? (
        <div className='pt-10'>
          <nav className='flex flex-col md:flex-row items-center  md:justify-between md:items-center pb-10 px-20'>
            <Link href='/'>
              <Image src='/logo.png' width={302} height={47} alt='logo' />
            </Link>

            <div className='flex justify-between px-4 md:mt-2  w-screen md:w-3/12 mt-10'>
              <button>
                <Notification />
              </button>
              {/* <button onClick={logout}> */}
              <Logout />
              {/* </button> */}

              <p>Welcome teacher {user}</p>
            </div>
          </nav>

          <section className='main h-[72vh]'>
            <h2>Rejected</h2>

            <div className='p-10 m-5 bg-white'>
              <ol className=' '>
                <li>
                  Right to leave and work in the UK <span>(verified)</span>
                </li>
                <li>
                  DBS certificate <span>(verified)</span>
                </li>
                <li>
                  Educational qualification <span>(verified)</span>
                </li>
                <li>
                  QTS <span>(verified)</span>
                </li>
                <li>
                  Passport, ID or UK Driver’s License <span>(rejected)</span>
                </li>
                <li>
                  Passport size photo <span>(verified)</span>
                </li>
                <li>
                  Proof of address <span>(verified)</span>
                </li>
                <li>
                  National Insurance number <span>(rejected)</span>
                </li>
                <li>
                  Permit or ID <span>(verified)</span>
                </li>
              </ol>
            </div>
          </section>

          <style jsx>
            {`
              .main {
                background: #f0fbff;
                padding: 40px;
              }
              h2 {
                font-style: normal;
                font-weight: 600;
                font-size: 30px;
                line-height: 45px;
                color: #ef553b;
                text-align: center;
              }
              li {
                font-weight: 400;
                font-size: 13px;
                line-height: 30px;
                text-align: center;
                text-decoration: underline;
                color: #2bc8ed;
              }
              span {
                font-weight: 600;
                font-size: 13px;
                line-height: 30px;
                text-align: center;
                color: #2bc8ed;
                text-decoration: none !important;
              }
            `}
          </style>
        </div>
      ) : (
        <div>
          <p>loading</p>
        </div>
      )}
    </>
  )
}

export default DashboardTeacher
