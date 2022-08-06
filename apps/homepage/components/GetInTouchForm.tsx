import axios from 'lib/axios'
import {useState} from 'react'
import {Button, Loading} from 'ui'

type Props = {}
const GetInTouchForm = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [sentGetInTouch, setSentGetInTouch] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const GetInTouchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // console.log('hi')
    setLoading(true)
    axios
      .post(`/api/user/mail-to-admin`, {
        name: name,
        email: email,
        message: message,
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
  return (
    <form
      onSubmit={GetInTouchSubmit}
      className=' w-[330px] flex flex-col  lg:grid   lg:grid-cols-2 gap-2 lg:gap-y-4 lg:my-5 lg:w-[580px] lg:h-[200px]'
    >
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        type='text'
        placeholder='Name'
        className='border border-[#C4C4C4] rounded-md p-1 px-5 focus:border-blue-500 outline-blue-400'
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type='email'
        placeholder='Email'
        className='border border-[#C4C4C4] rounded-md p-1 px-5 outline-blue-400'
      />

      <textarea
        name='message'
        placeholder='Message'
        id=''
        value={message}
        onChange={e => setMessage(e.target.value)}
        cols={10}
        rows={5}
        className='border border-[#C4C4C4] rounded-md p-1 px-5 lg:col-span-2 outline-blue-400'
      />

      <button
        type='submit'
        className='bg-[#42B9D1] button text-15px justify-self-end  p-3 px-5 tracking-wide text-white rounded-md   col-start-2'
      >
        {loading ? <Loading /> : <a>SEND REQUEST</a>}
      </button>
    </form>
  )
}

export default GetInTouchForm
