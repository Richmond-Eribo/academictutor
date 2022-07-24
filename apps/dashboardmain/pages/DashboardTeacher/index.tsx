import axios from 'lib/axios'
import Logout from 'components/svg/Logout'
import Notification from 'components/svg/Notification'
import {useAuth} from 'hooks/auth'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import useSWR from 'swr'
import LoadingComponent from 'components/LoadingComponent'
import RequestCard from 'components/RequestCard'
import {Requests} from 'interfaces/types'

const DashboardTeacher = () => {
  const {loading, user, logout} = useAuth({
    middleware: 'auth',
  })

  const [selectedFileName, setSelectedFileName] = useState<any>()
  const [selectedFile, setSelectedFile] = useState<any>()
  const [phone, setPhone] = useState('')
  // const user = true

  const {
    data: teachersRequest,
    error: teacherRequestError,
    mutate: teacherRequestMutate,
  } = useSWR('api/teacher/requests', () =>
    axios
      .get('api/teacher/requests')
      .then(res => res)
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401)
          throw error
      })
  )

  // const baseURL = 'http://localhost:8000'

  const submitFile = (e: {preventDefault: () => void}) => {
    e.preventDefault()

    const selectedFileId = documentsArray.find(
      document => document.name === selectedFileName
    )

    const formData = new FormData()
    formData.append(selectedFileId?.id!, selectedFile)
    axios
      .post(`/api/user/update/${user.id}`, formData)
      .then(res => res.data)
      .catch(error => {
        throw error
      })
    // console.log(selectedFileId?.id)
  }

  // const submitUpdate = () => {
  //   const formData = new FormData()
  //   formData.append('phone', phone)

  //   axios
  //     .post(`/api/user/update/${user.id}`, formData)
  //     .then(res => res.data)
  //     .catch(error => {
  //       throw error
  //     })
  //   alert('hi')
  // }

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
            {/* <h2>Rejected</h2> */}

            <div className='p-10 m-5 bg-white'>
              <p className='text-center font-medium text-xl my-4'>
                You will be alerted Via mail if your service is being requested
                by a teacher
              </p>

              {/* updating profile picture */}
              <>
                <div className='form-control  flex justify-center'>
                  <div className='input-group mx-auto  w-[25%]'>
                    <select
                      className='select select-bordered'
                      value={selectedFileName}
                      onChange={e => {
                        setSelectedFileName(e.target.value)
                      }}
                    >
                      <option disabled selected>
                        Choose your document to upload
                      </option>
                      {documentsArray.map(document => (
                        <option
                          key={document.id}
                          // onSelect={() => console.log(document.id)}
                        >
                          {document.name}
                        </option>
                      ))}
                    </select>
                    <label
                      htmlFor={selectedFileName ? 'my-modal-3' : ''}
                      className={`btn bg-primary-mid `}
                    >
                      Go
                    </label>
                  </div>
                </div>
                {/* <!-- The button to open modal --> */}

                {/* <!-- Put this part before </body> tag --> */}
                <input
                  type='checkbox'
                  id='my-modal-3'
                  className='modal-toggle'
                />
                <div className='modal'>
                  <div className='modal-box relative'>
                    <label
                      htmlFor='my-modal-3'
                      className='btn btn-sm border-none bg-primary-mid btn-circle absolute right-2 top-2'
                    >
                      ✕
                    </label>
                    <form
                      className=''
                      encType='multipart/form-data'
                      onSubmit={submitFile}
                    >
                      <input
                        type='file'
                        onChange={e => setSelectedFile(e.target.files![0])}
                        name='file'
                        id='file'
                      />
                      <button
                        className='bg-primary-mid border-none btn '
                        onClick={submitFile}
                      >
                        submit
                      </button>
                    </form>
                  </div>
                </div>
              </>

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

              <div className=' flex flex-col lg:flex-row items-center lg:items-start   justify-around'>
                {teachersRequest ? (
                  <RequestCard requests={teachersRequest.data as Requests[]} />
                ) : (
                  ''
                )}

                <ol className=' '>
                  <p className='text-center'>List of Documents</p>
                  {documentsArray.map(document => (
                    <li>{document.name}</li>
                  ))}
                </ol>
              </div>
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

const documentsArray = [
  {
    name: 'DBS certificate',
    id: 'dbs_certificate',
  },

  {
    name: 'Educational qualification',
    id: 'educational_qualification',
  },
  {
    name: 'QTS',
    id: 'qts',
  },
  {
    name: 'Passport, ID or UK Driver’s License',
    id: 'passport_id_or_driver_license',
  },
  {
    name: 'Passport size photo',
    id: 'passport_photo',
  },
  {
    name: 'Proof of address',
    id: 'proof_of_address',
  },
  {
    name: 'National Insurance number',
    id: 'national_insurance_number',
  },
  {
    name: 'Permit or ID',
    id: 'permit_or_id',
  },
  // {
  //   name: 'Permit or ID',
  //   id: 'permit_or_id',
  // },
  {
    name: 'signature',
    id: 'signature',
  },
]

export default DashboardTeacher
