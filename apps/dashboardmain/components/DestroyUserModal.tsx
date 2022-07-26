type Props = {
  deleteUser: () => void
}

const DestroyUserModal = ({deleteUser}: Props) => {
  return (
    <div className='mt-10'>
      <label
        htmlFor='my-modal-3'
        className='px-4 py-2  h-[35px] bg-red-500 hover:bg-red-700 duration-150  rounded-xl text-white'
      >
        Destroy Current Teacher
      </label>

      {/* <!-- Put this part before </body> tag --> */}
      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='my-modal-3'
            className='btn btn-sm btn-circle border-none bg-primary-mid absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='text-lg font-bold mb-10'>
            Are you sure you want to delete this user?
          </h3>
          <button
            onClick={deleteUser}
            className='lg:w-[95px] mx-2 w-[80px] h-[35px] bg-primary-light  duration-150  rounded-xl text-white'
          >
            yes
          </button>

          <label
            htmlFor='my-modal-3'
            className='lg:w-[95px] px-9 hover:bg-secondary-light py-2 mx-2 w-[80px] h-[35px] bg-secondary-dark  duration-150  rounded-xl text-white'
          >
            No
          </label>
        </div>
      </div>
    </div>
  )
}

export default DestroyUserModal
