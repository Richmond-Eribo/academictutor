import Image from 'next/image'

const LoadingComponent = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <Image
        width={370}
        height={59}
        src='/logo.png'
        alt='Logo'
        // className='bg-black'
      />
    </div>
  )
}

export default LoadingComponent
