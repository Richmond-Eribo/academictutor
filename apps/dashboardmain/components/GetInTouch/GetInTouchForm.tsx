import {type} from 'os'
import Button from '../Button'

type Props = {
  dashboard?: boolean
  submit?(e: React.FormEvent<HTMLFormElement>): void
  message?: string
  setMessage?: React.Dispatch<React.SetStateAction<string>>
  loadingState?: boolean
}
const GetInTouchForm = ({
  dashboard,
  submit,
  message,
  setMessage,
  loadingState,
}: Props) => {
  return (
    <form
      onSubmit={submit}
      className=' w-[330px] flex flex-col  lg:grid   lg:grid-cols-2 gap-2 lg:gap-y-4 lg:my-5 lg:w-[580px] lg:h-[200px]'
    >
      {!dashboard && (
        <>
          <input
            type='text'
            placeholder='Name'
            className='border border-[#C4C4C4] rounded-md p-1 px-5 focus:border-blue-500 outline-blue-400'
          />
          <input
            type='email'
            placeholder='Email'
            className='border border-[#C4C4C4] rounded-md p-1 px-5 outline-blue-400'
          />
        </>
      )}
      <textarea
        name='message'
        placeholder='Message'
        id=''
        value={message}
        onChange={e => setMessage!(e.target.value)}
        cols={10}
        rows={5}
        className='border border-[#C4C4C4] rounded-md p-1 px-5 lg:col-span-2 outline-blue-400'
      />
      <Button
        text='SEND REQUEST'
        classname={[
          'bg-[#42B9D1]',
          'button',
          'text-15px',
          'justify-self-end',
          'p-3',
          'tracking-wide',
          'text-white',
          'rounded-md',
          'col-start-2',
        ]}
        type='submit'
        loadingState={loadingState!}
      />
      {/* <button
        onClick={e => {
          e.preventDefault()
          submit!()
        }}
        className=''
      >
        SEND REQUEST
      </button> */}
    </form>
  )
}

export default GetInTouchForm
