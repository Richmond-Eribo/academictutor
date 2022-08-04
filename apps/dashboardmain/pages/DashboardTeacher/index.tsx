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
import Button from 'components/Button'
import GetInTouch from 'components/GetInTouch'

const DashboardTeacher = () => {
  const {loading, setLoading, user, logout} = useAuth({
    middleware: 'auth',
  })

  const [fileUploaded, setFileUploaded] = useState<string | undefined>()
  // console.log(user)
  const [selectedFileName, setSelectedFileName] = useState<any>()
  const [selectedFile, setSelectedFile] = useState<any>()
  const [phone, setPhone] = useState('')
  // const user = true

  const [messageInput, setMessage] = useState('')
  const [sentGetInTouch, setSentGetInTouch] = useState(false)

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

  // submitFile
  const submitFile = (e: {preventDefault: () => void}) => {
    e.preventDefault()
    setLoading(true)

    const selectedFileId = documentsArray.find(
      document => document.name === selectedFileName
    )

    const formData = new FormData()
    formData.append(selectedFileId?.id!, selectedFile)

    axios
      .post(`/api/user/update/${user.id}`, formData)
      .then(res => {
        setLoading(false)
        const data = res.data
        setFileUploaded('Uploaded succesfully.')
        return res.data
      })
      .catch(error => {
        setLoading(false)
        setFileUploaded('This is sad, your file upload was unsuccessful.')
        throw error
      })

    // console.log(selectedFileId?.id)
  }

  const {
    data: fileUrl,
    error: fileUrlError,
    mutate: fileUrlMutate,
  } = useSWR(
    `api/user/get-file${user?.profile_picture}`,
    () =>
      user &&
      axios
        .get(`api/user/get-file/${user.profile_picture}`)
        .then(res => res.data)
        .catch(error => {
          if (error.response.status !== 409 || error.response.status == 401)
            throw error
        })
  )

  const GetInTouchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // console.log('hi')
    setLoading(true)
    axios
      .post(`/api/user/mail-to-admin`, {
        name: user.name,
        email: user.email,
        message: messageInput,
      })
      .then(res => {
        setLoading(false)
        setSentGetInTouch(true)
        setMessage('')
        return res.data
      })
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401) {
          setLoading(false)
          setMessage('')
          alert('Hey, your request could not be processed')
          throw error
        }
      })
  }

  const loaderProp = ({src}: any) => {
    return src
  }

  // ;('/get-file-url/{email}/{name}')
  return (
    <>
      {user ? (
        <div className='pt-10'>
          {/* <>{console.log(fileUrl && fileUrl)}</> */}
          <nav className='flex flex-col md:flex-row items-center  md:justify-between md:items-center pb-10 px-20'>
            <Link href='/'>
              <a>
                <Image src='/logo.png' width={302} height={47} alt='logo' />
              </a>
            </Link>

            <div className='flex justify-between px-4 md:mt-2  w-screen md:w-[28%] mt-10'>
              {/* <button>
                <Notification />
              </button> */}
              <p className=''>Welcome {user.name}</p>
              <button onClick={logout}>
                <Logout />
              </button>
            </div>
            {/* {fileUrl && fileUrl} */}
            <div className='h-[5rem] relative w-[5rem] bg-slate-500 mb-3 rounded-full overflow-clip'>
              {user.profile_picture ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/get-file/${user.profile_picture}`}
                  layout='fill'
                  alt='hi'
                  loader={loaderProp}
                />
              ) : (
                <>
                  <p className='text-xs text-white text-center '>
                    Upload a profile picture
                  </p>
                </>
              )}
            </div>
          </nav>

          <section className='main h-[72vh]'>
            {/* <h2>Rejected</h2> */}

            <div className='lg:p-10 p-3 m-5 bg-white'>
              <p className='text-center font-medium text-lg lg:text-xl my-4'>
                You will be alerted Via mail if your service is being requested
                by a teacher
              </p>

              {/* updating profile picture */}
              <>
                <div className='form-control   '>
                  <div className='input-group lg:mx-auto  w-[25%]'>
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
                      onClick={() => setFileUploaded(undefined)}
                      htmlFor='my-modal-3'
                      className='btn btn-sm border-none bg-primary-mid btn-circle absolute right-2 top-2'
                    >
                      ✕
                    </label>
                    {fileUploaded ? (
                      <div className=''>
                        <p className='font-bold py-4'>{fileUploaded}</p>
                        <p
                          onClick={() => setFileUploaded(undefined)}
                          className='text-primary-mid underline'
                        >
                          Try again
                        </p>
                      </div>
                    ) : (
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

                        <Button
                          text='submit'
                          // setLoading={setLoadingState}
                          onClickFunction={() => submitFile}
                          loadingState={loading}
                          classname={['button', 'sign-button', 'mt-5']}
                          type='submit'
                        />

                        {/* <button
                        className='bg-primary-mid  button sign-button'
                        onClick={submitFile}
                      >
                        submit
                      </button> */}
                      </form>
                    )}
                  </div>
                </div>
              </>

              <div className=' flex flex-col lg:flex-row lg:mt-10 items-center lg:items-start   justify-around'>
                {/* {teachersRequest?.data ? (
                  <RequestCard requests={teachersRequest.data as Requests[]} />
                ) : (
                  'You have not been requested'
                )} */}

                <ol className=' '>
                  <p className='text-center font-semibold'>List of Documents</p>
                  {documentsArray.map(document => (
                    <li>{document.name}</li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section className='flex mt-20 flex-col justify-center items-center'>
            <p className='px-28 font-bold text-[20px] capitalize'>
              Get in Touch
            </p>
            {sentGetInTouch ? (
              <div className='bg-primary-light/20 rounded-lg p-5'>
                <p className='text-center mb-3'>Request sent</p>
                <button
                  onClick={() => setSentGetInTouch(false)}
                  className='button sign-button'
                >
                  Send Another Feedback
                </button>
              </div>
            ) : (
              <GetInTouch
                messageInput={messageInput}
                setMessage={setMessage}
                GetInTouch={GetInTouchSubmit}
                loadingState={loading}
              />
            )}
          </section>

          <style jsx>
            {`
              .main {
                background: #f0fbff;
                padding-top: 5px;
              }
              @media screen and (min-width: 900px) {
                .main {
                  background: #f0fbff;
                  padding: 40px;
                }
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
    name: 'Profile picture',
    id: 'profile_picture',
  },
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

  {
    name: 'signature',
    id: 'signature',
  },
]

export default DashboardTeacher
