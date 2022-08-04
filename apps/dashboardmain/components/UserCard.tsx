import {User} from 'interfaces/types'
import Link from 'next/link'
import {FC} from 'react'

type Title = 'Parents' | 'Teachers'

type Props = {
  title: Title
  height: string
  users: User[]
}
const UserCard: FC<Props> = ({title, height, users}) => {
  return (
    <div className='bg-white w-[360px] px-[35px] py-[30px] h-[600px] my-10 lg:my-0'>
      <h3 className='text-[20px] font-medium mb-5 '>{title} </h3>

      <ul className={`scrollbars  ${height} snap-y overflow-y-scroll`}>
        {users.length > 0 ? (
          users.map((user, index) => (
            <li
              key={index}
              className='h-[62px] mb-2 mx-1 scroll-my-2 flex bg-[#F0FBFF] rounded-2xl  items-center justify-between px-3'
            >
              {user.name}
              {title !== 'Parents' && (
                <Link href={`/DashboardAdmin/${title}?id=${user.id}`}>
                  <button className='w-[95px] h-[35px] bg-primary-light hover:bg-primary-dark duration-150  rounded-xl text-white'>
                    View
                  </button>
                </Link>
              )}
            </li>
          ))
        ) : (
          <li className='h-[62px] mb-2 mx-1 scroll-my-2 flex justify-center bg-[#F0FBFF] rounded-2xl  items-center  px-3'>
            Sorry, there are no <span className='lowercase mx-1'> {title}</span>
          </li>
        )}
      </ul>
      {/* <div className=' flex justify-center '>
        {link && (
          <Link href={link}>
            <button className='bg-primary-mid  mt-3 rounded-xl text-white py-[21px]  w-[300px] '>
              See more
            </button>
          </Link>
        )}
      </div> */}

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

export default UserCard
