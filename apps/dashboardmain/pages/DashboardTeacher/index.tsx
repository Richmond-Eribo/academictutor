import axios from 'lib/axios'
import Logout from 'components/svg/Logout'
import Notification from 'components/svg/Notification'
// import { error } from 'console'
import {useAuth} from 'hooks/auth'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import useSWR from 'swr'
import LoadingComponent from 'components/LoadingComponent'
// import {mutate} from 'swr'

const DashboardTeacher = () => {
  const {loading, user, logout} = useAuth({
    middleware: 'auth',
  })

  // const user = true

  const {
    data: teachers,
    error: teacherError,
    mutate: teacherMutate,
  } = useSWR('/api/teacher/', () =>
    axios
      .get('/api/teacher/')
      .then(res => res)
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401)
          throw error
      })
  )

  const [selectedFile, setSelectedFile] = useState<any>()
  const [phone, setPhone] = useState('')
  // const baseURL = 'http://localhost:8000'

  const submitFile = (e: {preventDefault: () => void}) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('profile_picture', selectedFile)
    axios
      .post(`/api/user/update/${user.id}`, formData)
      .then(res => res.data)
      .catch(error => {
        throw error
      })
    console.log(selectedFile)
  }

  const submitUpdate = () => {
    const formData = new FormData()
    formData.append('phone', phone)

    axios
      .post(`/api/user/update/${user.id}`, formData)
      .then(res => res.data)
      .catch(error => {
        throw error
      })
    alert('hi')
  }

  return (
    <>
      {user ? (
        <div className='pt-10'>
          {/* <>{console.log(user)}</> */}
          <nav className='flex flex-col md:flex-row items-center  md:justify-between md:items-center pb-10 px-20'>
            <Link href='/'>
              <a>
                <Image src='/logo.png' width={302} height={47} alt='logo' />
              </a>
            </Link>

            <div className='flex justify-between px-4 md:mt-2  w-screen md:w-3/12 mt-10'>
              {/* <button>
                <Notification />
              </button> */}
              <button onClick={logout}>
                <Logout />
              </button>

              <p>Welcome {user.name}</p>
            </div>
          </nav>

          <section className='main h-[72vh]'>
            <h2>Rejected</h2>

            <div className='p-10 m-5 bg-white'>
              <p>This is your dashboard</p>
              <p>
                You will be alerted Via mail if your service is being requested
                by a teacher
              </p>

              {/* updating profile picture */}
              {/* <form
                className=''
                encType='multipart/form-data'
                onSubmit={submitFile}
              >
                <p>update</p>
                <input
                  type='file'
                  onChange={e => setSelectedFile(e.target.files![0])}
                  name='file'
                  id='file'
                />
                <button className='bg-red-500 p-5 mx-10' onClick={submitFile}>
                  submit
                </button>
              </form> */}

              {/* updating phone number */}
              {/* <div className='my-5 '>
                <input
                  type='tel'
                  value={phone}
                  placeholder='phone'
                  onChange={e => setPhone(e.target.value)}
                />
                <button className='bg-green-400 p-4' onClick={submitUpdate}>
                  submit
                </button>
              </div> */}

              <ol className=' '>
                <li>
                  Right to leave and work in the UK <span>(verifying)</span>
                </li>
                <li>
                  DBS certificate <span>(verifying)</span>
                </li>
                <li>
                  Educational qualification <span>(verifying)</span>
                </li>
                <li>
                  QTS <span>(verifying)</span>
                </li>
                <li>
                  Passport, ID or UK Driver’s License <span>(verifying)</span>
                </li>
                <li>
                  Passport size photo <span>(verifying)</span>
                </li>
                <li>
                  Proof of address <span>(verifying)</span>
                </li>
                <li>
                  National Insurance number <span>(verifying)</span>
                </li>
                <li>
                  Permit or ID <span>(verifying)</span>
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
        <LoadingComponent />
      )}
    </>
  )
}

export default DashboardTeacher
