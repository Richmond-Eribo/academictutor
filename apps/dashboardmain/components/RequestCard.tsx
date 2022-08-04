import {Requests} from 'interfaces/types'
import Link from 'next/link'
import {FC, useState} from 'react'

type Props = {
  requests: Requests[]
  admin?: boolean
}

const RequestCard: FC<Props> = ({requests, admin}) => {
  const [modalData, setModalData] =
    useState<Omit<Requests, 'id' | 'created_at' | 'teacher_id' | 'parent_id'>>()

  return (
    <div className='bg-white w-[360px] py-[30px] h-[600px] my-10 lg:my-0 '>
      <h3 className='text-[20px] font-medium mb-5 px-[35px]'>Requests</h3>

      <ul className='scrollbars h-[480px] px-1  snap-y overflow-y-scroll'>
        {requests?.map((request, index) => (
          <li
            key={index}
            className='h-[70px] bg-[#F0FBFF] rounded-2xl   my-3 overflow-hidden flex  items-center justify-center scroll-my-2'
          >
            <label
              htmlFor='my-modal-3'
              onClick={() => setModalData(request)}
              className='modal-button   px-2'
            >
              {admin
                ? `${request.parent_name} requested for ${request.teacher_name}`
                : `${request.parent_name} requested for your service`}
            </label>
          </li>
        ))}
      </ul>
      {/* <div className=' flex justify-center '>
        <Link href='/DashboardAdmin'>
          <button className='bg-primary-mid  mt-3 rounded-3xl text-white py-[21px]  w-[300px] '>
            See more
          </button>
        </Link>
      </div> */}

      {/* Modal */}

      {admin && (
        <div className=''>
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
                <p className='font-semibold'>{modalData?.parent_name}</p>
                <p>{modalData?.parent_phone} </p>
                <p>{modalData?.parent_email} </p>
              </div>

              <div className='text-center py-2'>
                <p className='font-semibold'>{modalData?.teacher_name} </p>
                <p>{modalData?.teacher_phone} </p>
                <p>{modalData?.teacher_email} </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>
        {`
          .scrollbars::-webkit-scrollbar {
            width: 8px;
            // height: 0px;
          }

          .scrollbars::-webkit-scrollbar-track {
            // border-radius: 100vh;
            // background: #f7f4ed;
            background: rgb(43 200 237 / 0.05);
            margin-left: 4px;
          }

          .scrollbars::-webkit-scrollbar-thumb {
            background: rgb(43 200 237 / 0.6);
            border-radius: 100vh;
            border: 2px solid #f6f7ed;
          }

          .scrollbars::-webkit-scrollbar-thumb:hover {
            background: #c0a0b9;
          }
        `}
      </style>
    </div>
  )
}

export default RequestCard
