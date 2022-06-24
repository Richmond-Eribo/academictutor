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
  const [subjects, setSubjects] = useState(null)
  const [profile, setProfile] = useState(null)
  const [right_to_work, setRight_to_work] = useState(null)
  const [passport_id_or_driver_license, setPassport_id_or_driver_license] =
    useState(null)
  const [educational_qualification, setEducational_qualification] =
    useState(null)
  const [dbs_certificate, setDbs_certificate] = useState(null)
  const [qts, setQts] = useState(null)
  const [passport_photo, setPassport_photo] = useState(null)
  const [proof_of_address, setProof_of_address] = useState(null)
  const [national_insurance_number, setNational_insurance_number] =
    useState(null)
  const [permit_or_id, setPermit_or_id] = useState(null)
  const [signature, setSignature] = useState(null)

  const submitFormTeacher = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    register({
      setErrors,
      name,
      email,
      password,
      phone,
      profile_picture: null,
      role: 'Teacher',
      relationship: null,
      organisation: null,
      position: null,
      profile,
      right_to_work,
      dbs_certificate,
      educational_qualification,
      passport_id_or_driver_license,
      qts,
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
    <>
      <div className='py-10 px-4'>
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
              submitFormTeacher={submitFormParent}
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
          <div className={`${tab == 1 ? 'hidden' : 'block'} `}>
            <ParentSignUp
              submitFormTeacher={submitFormTeacher}
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
    </>
  )
}

export default SignUp
