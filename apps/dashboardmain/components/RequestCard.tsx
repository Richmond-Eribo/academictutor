import Link from 'next/link'

const RequestCard = () => {
  return (
    <div className='bg-white w-[360px] py-[30px] h-[600px] my-10 lg:my-0 '>
      <h3 className='text-[20px] font-medium mb-5 px-[35px]'>Requests</h3>

      <ul>
        {[
          'Mrs J. Marie requested for David Silman',
          'Mrs J. Marie requested for David Silman',
          'Mrs J. Marie requested for David Silman',
          'Mrs J. Marie requested for David Silman',
          'Mrs J. Marie requested for David Silman',
          'Mrs J. Marie requested for David Silman',
        ].map((i, index) => (
          <li
            key={index}
            className='h-[70px] flex  items-center justify-center'
          >
            <label htmlFor='my-modal-3' className='modal-button'>
              {i}
            </label>
          </li>
        ))}
      </ul>
      <div className=' flex justify-center '>
        <Link href='/DashboardAdmin'>
          <button className='bg-primary-mid  mt-3 rounded-3xl text-white py-[21px]  w-[300px] '>
            See more
          </button>
        </Link>
      </div>

      {/* Modal */}

      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box bg-white relative'>
          <label
            htmlFor='my-modal-3'
            className='btn btn-sm border-none bg-primary-mid btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <div className='text-center py-2'>
            <p className='font-semibold'>Mrs J. Marie</p>
            <p>+44 88 888 8888</p>
            <p>Jmarie@yahoomail.com</p>
          </div>

          <div className='text-center py-2'>
            <p className='font-semibold'> David Silman</p>
            <p>+44 88 888 8888</p>
            <p>davidsilman@yahoomail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestCard
