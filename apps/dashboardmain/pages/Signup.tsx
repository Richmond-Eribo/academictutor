import React, {useState, useEffect, FC} from 'react'
import {useRouter} from 'next/router'
import {useAuth} from '../hooks/auth'
import ParentSignUp from 'components/SignUp/ParentSignUp'
import TeacherSignUp from 'components/SignUp/TeacherSignUp'
import axios from 'lib/axios'
import Link from 'next/link'
import Image from 'next/image'

const SignUp: FC = () => {
  const [activeInput, setActiveInput] = useState(0)
  const [tab, setTab] = useState(1)

  const router = useRouter()

  const {register, user} = useAuth({
    middleware: 'guest',
  })

  // Values from the form are stored here.
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState<number>()
  const [phone, setPhone] = useState<number>()
  const [errors, setErrors] = useState([])

  // documents or file for teachers
  const [ref_name, setRel_name] = useState('academictutor')
  const [ref_email, setRel_email] = useState('academictutor1@gmail.com')
  const [ref_phone, setRel_phone] = useState(+1249094444422222)
  const [ref_relationship, setRel_relationship] = useState('tutor')
  const [ref_organisation, setRel_organisation] = useState('tutor')
  const [ref_position, setRel_position] = useState('tutor')
  const [profile_picture, setProfile_picture] = useState()
  const [subjects, setSubjects] = useState('')
  const [profile, setProfile] = useState<any>('')
  const [right_to_work, setRight_to_work] = useState<any>()
  const [passport_id_or_driver_license, setPassport_id_or_driver_license] =
    useState<any>()
  const [educational_qualification, setEducational_qualification] =
    useState<any>()
  const [dbs_certificate, setDbs_certificate] = useState<any>()
  const [qts, setQts] = useState<any>()
  const [passport_photo, setPassport_photo] = useState<any>()
  const [proof_of_address, setProof_of_address] = useState<any>()
  const [national_insurance_number, setNational_insurance_number] =
    useState<any>()
  const [permit_or_id, setPermit_or_id] = useState<any>()
  const [signature, setSignature] = useState<any>()

  // Modal for loading state
  // const [loadingModal, setLoadingModal] = useState(false)

  const checkEmailUniqueness = () => {
    axios
      .get(`/api/user/exist/${email}`)
      .then(res => console.log(res))
      .catch(error => {
        if (error.response.status !== 409 || error.response.status == 401)
          throw error
      })
  }

  const submitFormTeacher = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    register({
      setErrors,
      name,
      email,
      password,
      phone,
      subjects,
      role: 'teacher',
      profile,
      // contains reference info
      profile_picture,
      ref_relationship,
      ref_organisation,
      ref_position,
      ref_phone,
      ref_name,
      ref_email,
      // contains all the documents
      right_to_work,
      dbs_certificate,
      educational_qualification,
      qts,
      passport_id_or_driver_license,
      passport_photo,
      proof_of_address,
      national_insurance_number,
      permit_or_id,
      signature,
    })
  }

  const submitFormParent = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    register({
      setErrors,
      name,
      email,
      password,
      phone,
      profile_picture: null,
      role: 'parent',
    })
  }

  return (
    <div className='relative'>
      <div className=' py-10 px-4'>
        {/* <div className=''>{console.log('ji')}</div> */}
        {/* {errors.length > 0 && errors.map(error => console.log(error))} */}

        <figure className='w-[310px] mx-auto'>
          <Link href='/'>
            <>
              <a className='hidden lg:block'>
                <Image
                  src='/logo.png'
                  height={42}
                  width={305}
                  alt='logo'
                  className=''
                  priority
                />
              </a>
              <a className='block lg:hidden'>
                <Image
                  src='/logo.png'
                  height={42 / 1.2}
                  width={305 / 1.2}
                  alt='logo'
                  className=''
                  priority
                />
              </a>
            </>
          </Link>
        </figure>
        <div className='flex justify-center my-5 '>
          <p
            onClick={() => setTab(1)}
            className={`   py-3 px-4 border-t-2 cursor-pointer ${
              tab == 1
                ? ' border-t-[#42B9D1] text-[#42B9D1]'
                : 'border-t-[#BFC7D3] text-[#BFC7D3] text-xs'
            }`}
          >
            Sign up as a Teacher
          </p>
          <p
            onClick={() => setTab(2)}
            className={` py-3 px-4 border-t-2 cursor-pointer ${
              tab == 2
                ? ' border-t-[#42B9D1] text-[#42B9D1]'
                : 'border-t-[#BFC7D3] text-[#BFC7D3] text-xs'
            }`}
          >
            Sign up as a Parent
          </p>
        </div>

        <main className='flex justify-center'>
          <div className={`${tab == 2 ? 'hidden' : 'block'}`}>
            <TeacherSignUp
              submitFormTeacher={submitFormTeacher}
              setActiveInput={setActiveInput}
              setName={setName}
              setPhone={setPhone}
              setEmail={setEmail}
              setPassword={setPassword}
              subjects={subjects}
              setSubjects={setSubjects}
              password={password!}
              activeInput={activeInput}
              name={name}
              email={email}
              phone={phone}
              profile={profile}
              setProfile={setProfile}
              setProfile_picture={setProfile_picture}
              profile_picture={profile_picture}
              right_to_work={right_to_work}
              dbs_certificate={dbs_certificate}
              educational_qualification={educational_qualification}
              qts={qts}
              passport_id_or_driver_license={passport_id_or_driver_license}
              passport_photo={passport_photo}
              proof_of_address={proof_of_address}
              national_insurance_number={national_insurance_number}
              setRight_to_work={setRight_to_work}
              setDbs_certificate={setDbs_certificate}
              setEducational_qualification={setEducational_qualification}
              setQts={setQts}
              setPassport_id_or_driver_license={
                setPassport_id_or_driver_license
              }
              setPassport_photo={setPassport_photo}
              setProof_of_address={setProof_of_address}
              setNational_insurance_number={setNational_insurance_number}
            />
          </div>
          <div className={`${tab == 1 ? 'hidden' : 'block'} `}>
            {/* <button className='btn ' onClick={checkEmailUniqueness}>
              click me please
            </button> */}
            <ParentSignUp
              submitFormParent={submitFormParent}
              setActiveInput={setActiveInput}
              setName={setName}
              setPhone={setPhone}
              setEmail={setEmail}
              setPassword={setPassword}
              password={password!}
              activeInput={activeInput}
              name={name}
              email={email}
              phone={phone}
            />
          </div>
        </main>
      </div>
    </div>
  )
}

export default SignUp
