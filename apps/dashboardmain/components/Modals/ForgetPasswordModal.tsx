import React, {useState} from 'react'
import Input from 'ui/components/Input'

type Props = {
  sendForgetPassword: (event: React.FormEvent<HTMLFormElement>) => void
  email: string
  setEmail: React.Dispatch<React.SetStateAction<any>>
  activeInput: number
  setActiveInput: React.Dispatch<React.SetStateAction<any>>
}
const ForgetPasswordModal = ({
  sendForgetPassword,
  email,
  setEmail,
  activeInput,
  setActiveInput,
}: Props) => {
  return (
    <div>
      {/* <!-- The button to open modal --> */}
      <label
        htmlFor='my-modal-3'
        className='px-5 text-[#42B9D1] capitalize cursor-pointer'
      >
        Forgot password?
      </label>

      {/* <!-- Put this part before </body> tag --> */}
      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='my-modal-3'
            className='btn btn-sm bg-primary-mid border-none btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='text-lg font-bold'>Forgot or want a new Password</h3>
          <form onSubmit={e => sendForgetPassword(e)} className=''>
            <p className='mb-5'>Please enter your email address</p>

            <Input
              type='email'
              setActiveInput={setActiveInput}
              activeInput={activeInput}
              activeNumber={1}
              placeholder='Email'
              marginTop={0}
              value={email}
              setValue={setEmail}
            />

            <button className='button mt-5 sign-button w-[330px] lg:w-[390px]'>
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgetPasswordModal
