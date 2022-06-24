import {ReactNode} from 'react'

type Props = {
  children: ReactNode
}

const Navbar = ({children}: Props) => {
  return (
    <div className=' flex justify-between  lg:px-32'>
      {children}
      <nav className='flex justify-around w-3/12'>
        <p>hi</p>
        <p>ple</p>
        <p>Welcome Maria</p>
      </nav>
    </div>
  )
}

export default Navbar
