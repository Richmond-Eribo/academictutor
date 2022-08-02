import DocumenCard from 'components/DocumenCard'
import Logout from 'components/svg/Logout'
import UserCard from 'components/UserCard'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useAuth} from 'hooks/auth'
import useSWR from 'swr'
import axios from 'lib/axios'
import {Credentials} from 'interfaces/types'
import {useState} from 'react'
import LoadingComponent from 'components/LoadingComponent'
import DestroyUserModal from 'components/Modals/DestroyUserModal'

const Slug = () => {
  const router = useRouter()

  const {slug, id} = router.query
  const {loading, user, logout} = useAuth({
    middleware: 'auth',
  })

  // get all teachers
  const {
    data: teachers,
    error: teacherError,
    mutate: teacherMutate,
  } = useSWR('/api/teacher', () =>
    axios
      .get('/api/teacher')
      .then(res => res)
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401)
          throw error
      })
  )

  // get single teacher
  const {
    data: singleTeacher,
    error: singleTeacherError,
    mutate: singleTeacherMutate,
  } = useSWR(`/api/teacher/${id ? id : 1}`, () =>
    axios
      .get(`/api/teacher/${id ? id : 1}`)
      .then(res => res.data)
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401)
          throw error
      })
  )

  // /teacher-requests/{teacher-id}

  // all request made to a teacher
  // const {
  //   data: requestsTeacher,
  //   error: requestsTeacherError,
  //   mutate: requestTeacherMutate,
  // } = useSWR(`/api/admin/teacher-requests/${id ? id : 1}`, () =>
  //   axios
  //     .get(`/api/admin/teacher-requests/${id ? id : 27}`)
  //     .then(res => res)
  //     .catch(error => {
  //       if (error.response.status !== 409 || error.response.status == 401)
  //         throw error
  //     })
  // )

  // get parent request
  // const {
  //   data: requestsParentID,
  //   error: requestsParentIDError,
  //   mutate: requestParentIDMutate,
  // } = useSWR(`/api/admin/parent-requests/2`, () =>
  //   axios
  //     .get(`/api/admin/parent-requests/2`)
  //     .then(res => res)
  //     .catch(error => {
  //       if (error.response.status !== 409 || error.response.status == 401)
  //         throw error
  //     })
  // )

  // getting teachers credentials
  const {
    data: credentials,
    error: credentialsError,
    mutate: credentialsMutate,
  } = useSWR(`/api/admin/credentials/${id}`, () =>
    axios
      .get(`/api/admin/credentials/${id}`)
      .then(res => res)
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401)
          throw error
      })
  )

  // verify teacher credetial
  const verifyCredentials = (documentName: string) => {
    axios
      .post(`/api/admin/verify-teacher/${documentName}/${id}`)
      .then(res => res)
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401)
          throw error
      })
    // alert('hi')
  }

  // unverify  teacher credential
  const unverifiedCredentials = (documentName: string) => {
    axios
      .post(`/api/admin/unverify-teacher/${documentName}/${id}`)
      .then(res => res)
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401)
          throw error
      })
  }

  // download credential
  const downloadCredentials = (documentName: string) => {
    axios
      .get(`/api/user/download-file/${documentName}`)
      .then(res => res.data)
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401)
          alert(error.response.message)
        throw error
      })
  }

  const deleteTeachers = () => {
    axios
      .post(`/api/admin/delete-user/${id}`)
      .then(res => {
        if (res.status == 200) {
          alert('user deleted')
          router.reload()
        }
      })
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401)
          alert(error.response.message)
        throw error
      })
  }

  const [fileUrl, setFileUrl] = useState()

  // this loader helps next/image fetch url from the backend
  const loaderProp = ({src}: any) => {
    return src
  }

  return (
    <>
      {/* {singleTeacher && console.log(singleTeacher.data)} */}
      {/* {requestsTeacher && console.log(requestsTeacher)} */}

      {/* {credentials && console.log(qts)} */}

      {user ? (
        <div>
          <nav className='flex flex-col md:flex-row items-center  md:justify-between md:items-center py-5  px-20'>
            <Image src='/logo.png' width={302} height={47} alt='logo' />

            <div className='flex justify-between px-4 md:mt-2  w-screen md:w-3/12 mt-10'>
              <Link href='/DashboardAdmin'>
                <button>Dashboard</button>
              </Link>
              <Link href='/DashboardAdmin/teacher'>
                <button>Teachers</button>
              </Link>
              <button onClick={logout}>
                <Logout />
              </button>
            </div>
          </nav>

          <main className='bg-[#F0FBFF] py-5 lg:px-20 px-3'>
            <h1 className='font-bold lg:text-[35px] text-[28px] mb-5'>
              {slug}
            </h1>

            <div className='flex bg-white pb-5 justify-between flex-col lg:flex-row'>
              {teachers ? (
                <UserCard
                  users={teachers!.data}
                  height={'h-[460px]'}
                  title='Teachers'
                  // link='/DashboardAdmin/teacher'
                />
              ) : (
                <div>There are currently no Teachers</div>
              )}
              <div className='bg-white lg:px-[30px] px-5 lg:w-[800px] py-[30px] '>
                <>
                  {singleTeacher && (
                    <div className='flex flex-col lg:flex-row lg:items-center'>
                      <figure className='lg:w-[154px] relative bg-tertiary-mid-dark h-[110px] w-[110px] mb-2 mr-5  overflow-hidden rounded-full lg:h-[154px] '>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/get-file/${singleTeacher?.profile_picture}`}
                          layout='fill'
                          alt='hi'
                          loader={loaderProp}
                        />
                      </figure>
                      <div className='lg:w-[355px]'>
                        <h2 className='card-title text-14'>
                          {singleTeacher.name}
                        </h2>
                        <p className='text-sm -mt-1 mb-2'>
                          {singleTeacher.subjects}
                        </p>
                        <p className='text-sm mb-10'>{singleTeacher.profile}</p>
                      </div>
                    </div>
                  )}
                </>

                <div className='scrollbar snap-y overflow-y-scroll h-[340px] lg:w-[525px]'>
                  {!credentials && <p>No documents uploaded yet</p>}

                  {credentials?.data.national_insurance_number && (
                    <DocumenCard
                      downloadDocument={() =>
                        downloadCredentials(
                          credentials.data.national_insurance_number
                        )
                      }
                      verifyDocument={() =>
                        verifyCredentials('national-insurane-number')
                      }
                      unverifyDocument={() =>
                        unverifiedCredentials('national-insurance-number')
                      }
                      documentName='national insurance number'
                      isVerified={
                        credentials?.data.national_insurance_number_isverified
                      }
                    />
                  )}

                  {/* {fileUrl && (
                    <Image
                      src={`http://localhost:8000/public/${fileUrl}`}
                      height={400}
                      width={350}
                      alt='this'
                    />
                  )} */}

                  {credentials?.data.qts && (
                    <DocumenCard
                      downloadDocument={() =>
                        downloadCredentials(credentials.data.qts)
                      }
                      verifyDocument={() => verifyCredentials('qts')}
                      unverifyDocument={() => unverifiedCredentials('qts')}
                      documentName='qts'
                      isVerified={credentials?.data.qts_isverified}
                      // url={`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/download-file${credentials.data.qts}`}
                    />
                  )}

                  {credentials?.data.dbs_certificate && (
                    <DocumenCard
                      downloadDocument={() =>
                        downloadCredentials(credentials.data.dbs_certificate)
                      }
                      verifyDocument={() =>
                        verifyCredentials('dbs-certificate')
                      }
                      unverifyDocument={() =>
                        unverifiedCredentials('dbs-certificate')
                      }
                      documentName='dbs certificate'
                      isVerified={credentials?.data.dbs_certificate_isverified}
                    />
                  )}

                  {credentials?.data.educational_qualification && (
                    <DocumenCard
                      downloadDocument={() =>
                        downloadCredentials(
                          credentials.data.educational_qualification
                        )
                      }
                      verifyDocument={() =>
                        verifyCredentials('educational-qualification')
                      }
                      unverifyDocument={() =>
                        unverifiedCredentials('educational-qualification')
                      }
                      documentName='educational qualification'
                      isVerified={
                        credentials?.data.educational_qualification_isverified
                      }
                    />
                  )}

                  {credentials?.data.passport_id_or_driver_license && (
                    <DocumenCard
                      downloadDocument={() =>
                        downloadCredentials(
                          credentials.data.passport_id_or_driver_license
                        )
                      }
                      verifyDocument={() =>
                        verifyCredentials('passport-id-or-driver-license')
                      }
                      unverifyDocument={() =>
                        unverifiedCredentials('passport-id-or-driver-license')
                      }
                      documentName='passport id or driver license'
                      isVerified={
                        credentials?.data
                          .passport_id_or_driver_license_isverified
                      }
                    />
                  )}

                  {credentials?.data.passport_photo && (
                    <DocumenCard
                      downloadDocument={() =>
                        downloadCredentials(credentials.data.passport_photo)
                      }
                      verifyDocument={() => verifyCredentials('passport-photo')}
                      unverifyDocument={() =>
                        unverifiedCredentials('passport-photo')
                      }
                      documentName='passport photo'
                      isVerified={credentials?.data.passport_photo_isverified}
                    />
                  )}

                  {credentials?.data.proof_of_address && (
                    <DocumenCard
                      downloadDocument={() =>
                        downloadCredentials(credentials.data.proof_of_address)
                      }
                      verifyDocument={() =>
                        verifyCredentials('proof-of-address')
                      }
                      unverifyDocument={() =>
                        unverifiedCredentials('proof-of-address')
                      }
                      documentName='proof of address'
                      isVerified={credentials?.data.proof_of_address_isverified}
                    />
                  )}

                  {credentials?.data.right_to_work && (
                    <DocumenCard
                      downloadDocument={() =>
                        downloadCredentials(credentials.data.right_to_work)
                      }
                      verifyDocument={() => verifyCredentials('right-to-work')}
                      unverifyDocument={() =>
                        unverifiedCredentials('right-to-work')
                      }
                      documentName='right to work'
                      isVerified={credentials?.data.right_to_work_isverified}
                    />
                  )}
                  {/* <DocumenCard documentName='R: stringFC' />
                  <DocumenCard documentName='RFC' />
                  <DocumenCard documentName='RFC' />
                  <DocumenCard documentName='RFC' />
                  <DocumenCard documentName='RFC' /> */}
                </div>

                <DestroyUserModal deleteUser={deleteTeachers} />
              </div>
            </div>
          </main>

          <style jsx>
            {`
              .scrollbar::-webkit-scrollbar {
                width: 8px;
                // height: 0px;
              }

              .scrollbar::-webkit-scrollbar-track {
                // border-radius: 100vh;
                // background: #f7f4ed;
                background: rgb(43 200 237 / 0.05);
                margin-left: 4px;
              }

              .scrollbar::-webkit-scrollbar-thumb {
                background: rgb(43 200 237 / 0.6);
                border-radius: 100vh;
                border: 2px solid #f6f7ed;
              }

              .scrollbar::-webkit-scrollbar-thumb:hover {
                background: #c0a0b9;
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

export default Slug
