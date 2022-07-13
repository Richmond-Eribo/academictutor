import DocumentInput from 'components/DocumentInput'
import Link from 'next/link'
import React, {useState} from 'react'
import Input from 'ui/components/Input'

type Props = {
  submitFormTeacher: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  setActiveInput: React.Dispatch<React.SetStateAction<number>>
  setName: React.Dispatch<React.SetStateAction<any>>
  setEmail: React.Dispatch<React.SetStateAction<any>>
  setPhone: React.Dispatch<React.SetStateAction<any>>
  setPassword: React.Dispatch<React.SetStateAction<any>>
  setSubjects: React.Dispatch<React.SetStateAction<any>>
  activeInput: number
  name: string
  email: string
  phone: number | undefined
  password: number
  subjects: string | undefined
  profile: string | undefined
  right_to_work: any
  dbs_certificate: any
  educational_qualification: any
  qts: any
  passport_id_or_driver_license: any
  passport_photo: any
  proof_of_address: any
  national_insurance_number: any
  profile_picture: any
  permit_or_id?: any
  signature?: any
  setProfile: React.Dispatch<React.SetStateAction<any>>
  setRight_to_work: React.Dispatch<React.SetStateAction<any>>
  setDbs_certificate: React.Dispatch<React.SetStateAction<any>>
  setEducational_qualification: React.Dispatch<React.SetStateAction<any>>
  setQts: React.Dispatch<React.SetStateAction<any>>
  setPassport_id_or_driver_license: React.Dispatch<React.SetStateAction<any>>
  setPassport_photo: React.Dispatch<React.SetStateAction<any>>
  setProof_of_address: React.Dispatch<React.SetStateAction<any>>
  setNational_insurance_number: React.Dispatch<React.SetStateAction<any>>
  setProfile_picture: React.Dispatch<React.SetStateAction<any>>
}

const TeacherSignUp = ({
  submitFormTeacher,
  setActiveInput,
  setName,
  setPhone,
  setEmail,
  setPassword,
  setSubjects,
  setProfile_picture,
  setProfile,
  profile,
  profile_picture,
  password,
  activeInput,
  name,
  email,
  phone,
  subjects,
  right_to_work,
  dbs_certificate,
  educational_qualification,
  qts,
  passport_id_or_driver_license,
  passport_photo,
  proof_of_address,
  national_insurance_number,

  setRight_to_work,
  setDbs_certificate,
  setEducational_qualification,
  setQts,
  setPassport_id_or_driver_license,
  setPassport_photo,
  setProof_of_address,
  setNational_insurance_number,
}: Props) => {
  return (
    <form onSubmit={submitFormTeacher}>
      {/* <>{console.log(profile_picture)}</> */}
      <div className='flex content-around  w-screen lg:flex-row flex-col justify-around items-center'>
        <section className='lg:w-[400px] w-[330px]   '>
          <Input
            type='name'
            setActiveInput={setActiveInput}
            activeInput={activeInput}
            activeNumber={1}
            placeholder='Full Name'
            marginTop={0}
            value={name}
            setValue={setName}
          />

          <Input
            type='email'
            setActiveInput={setActiveInput}
            activeInput={activeInput}
            activeNumber={2}
            placeholder='Email'
            marginTop={5}
            value={email}
            setValue={setEmail}
          />

          <Input
            type='tel'
            setActiveInput={setActiveInput}
            activeInput={activeInput}
            activeNumber={2}
            placeholder='phone'
            marginTop={5}
            value={phone}
            setValue={setPhone}
          />

          <Input
            type='password'
            setActiveInput={setActiveInput}
            activeInput={activeInput}
            activeNumber={3}
            placeholder='password'
            marginTop={5}
            value={password!}
            setValue={setPassword}
          />

          <div className='mb-5'>
            <p className='font-bold mt-4 text-tertiary-mid-dark '>
              Subject Specialties
            </p>
            <p className='text-xs'>the subject you are prepared to tutor</p>

            <Input
              type='text'
              setActiveInput={setActiveInput}
              activeInput={activeInput}
              activeNumber={3}
              placeholder='Subject'
              marginTop={5}
              value={subjects}
              setValue={setSubjects}
            />
          </div>

          <DocumentInput
            placeholder='Profile picture'
            value={profile_picture}
            setValue={setProfile_picture}
            id='profile_picture'
          />

          {/* <div className='flex mt-10 mb-2'>
            <p className='text-text-light'>
              Are you currently eligible to work in the Uk?
            </p>
          </div> */}

          {/* <p className='text-text-light'>
            if yes include work{' '}
            <a className='text-[#42B9D1] underline'> Permit or ID</a>
          </p> */}
        </section>

        <section className='lg:w-[400px] w-[330px] my-10; lg:my-2;  '>
          <label
            className='font-bold text-tertiary-mid-dark '
            htmlFor='experience'
          >
            Experience/Profile
          </label>
          <textarea
            name='experience'
            id='experience'
            className='border  border-[#C4C4C4] rounded-md w-full p-1 px-5 lg:col-span-2 outline-blue-400'
            rows={5}
            value={profile}
            onChange={event => setProfile(event.target.value)}
          ></textarea>

          <p className=''>Other Document</p>
          <DocumentInput
            placeholder='Right to leave and work in the UK'
            value={right_to_work}
            setValue={setRight_to_work}
            id='right_to_work'
          />
          <DocumentInput
            placeholder='DBS certificate '
            value={dbs_certificate}
            setValue={setDbs_certificate}
            id='dbs_certificate'
          />
          <DocumentInput
            placeholder='Educational qualification'
            value={educational_qualification}
            setValue={setEducational_qualification}
            id='educational_qualification'
          />
          <DocumentInput
            placeholder='QTS'
            value={qts}
            setValue={setQts}
            id='qts'
          />
        </section>

        <section className='lg:w-[400px] w-[330px] '>
          <DocumentInput
            placeholder='Passport, ID or UK Driver’s License'
            value={passport_id_or_driver_license}
            setValue={setPassport_id_or_driver_license}
            id='passport_id'
          />
          <DocumentInput
            placeholder='Passport photo'
            value={passport_photo}
            setValue={setPassport_photo}
            id='passport_photo'
          />
          <DocumentInput
            placeholder='Proof of address'
            value={proof_of_address}
            setValue={setProof_of_address}
            id='proof_of_address'
          />
          <DocumentInput
            placeholder='National Insurance number'
            value={national_insurance_number}
            setValue={setNational_insurance_number}
            id='national_insurance_number'
          />
          <p className=''>Disclaimer</p>
          <p className='text-xs'>
            Academic tutors are required by law to safeguard our tutees, and we
            expect you to be part of this. By submitting the following
            information, you agree to abide by the rules and regulations of our
            business organisation. You also agree that all the information you
            provided are true and that you agree that by providing false
            information, Academic tutors reserve the right to inform the
            relevant authority in accordance with statutory regulation and law.
          </p>
          <p className='text-xs'>
            I verify that my application information is complete and truthful. I
            give permission to Academic Tutors to contact my references and
            review my records as necessary.
          </p>
        </section>
      </div>
      <div className='mx-auto w-[360px]'>
        <button
          onClick={() => console.log(profile_picture)}
          className='button mx-auto sign-button mt-10'
        >
          sign up
        </button>
      </div>
      <p className='mt-5 text-center'>
        Already have an account?{' '}
        <Link href='/Login'>
          <a className='text-[#42B9D1] '>Login</a>
        </Link>
      </p>
    </form>
  )
}

export default TeacherSignUp
