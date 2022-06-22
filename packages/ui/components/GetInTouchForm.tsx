const GetInTouchForm = () => {
  return (
    <form className=' w-[330px] flex flex-col  lg:grid   lg:grid-cols-2 gap-2 lg:gap-y-4 lg:my-5 lg:w-[580px] lg:h-[200px]'>
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
      <textarea
        name='message'
        placeholder='Message'
        id=''
        cols={10}
        rows={5}
        className='border border-[#C4C4C4] rounded-md p-1 px-5 lg:col-span-2 outline-blue-400'
      />
      <button
        onClick={e => {
          e.preventDefault()
        }}
        className='bg-[#42B9D1] button text-15px justify-self-end  p-3 px-5 tracking-wide text-white rounded-md   col-start-2'
      >
        SEND REQUEST
      </button>
    </form>
  )
}

export default GetInTouchForm
