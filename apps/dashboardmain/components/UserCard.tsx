import Link from 'next/link'
import {FC} from 'react'

type Props = {
  title: string
  link?: string
}
const UserCard: FC<Props> = ({title, link}) => {
  return (
    <div className='bg-white w-[360px] px-[35px] py-[30px] h-[600px] my-10 lg:my-0'>
      <h3 className='text-[20px] font-medium mb-5 '>{title} </h3>

      <ul>
        {[
          'Mrs J. Marie ',
          'Mrs J. Marie ',
          'Mrs J. Marie ',
          'Mrs J. Marie ',
          'Mrs J. Marie ',
          'Mrs J. Marie ',
        ].map((i, index) => (
          <li
            key={index}
            className='h-[62px] mb-2 flex bg-[#F0FBFF] rounded-2xl  items-center justify-between px-3'
          >
            {i}
            <Link href={`/DashboardAdmin/${title}`}>
              <button className='w-[95px] h-[35px] bg-primary-light/60 hover:bg-primary-light duration-150  rounded-3xl text-white'>
                View
              </button>
            </Link>
          </li>
        ))}
      </ul>
      <div className=' flex justify-center '>
        {link && (
          <Link href={link}>
            <button className='bg-primary-mid  mt-3 rounded-3xl text-white py-[21px]  w-[300px] '>
              See more
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default UserCard
