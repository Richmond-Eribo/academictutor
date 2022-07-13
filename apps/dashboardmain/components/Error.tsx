type Props = {
  errors: any
}

const Error = ({errors}: Props) => {
  return (
    <>
      {errors && (
        <div className=''>
          <ul className='mt-2 '>
            <li className='text-red-400'>{errors}</li>
            {/* {errors.map((error: any) => (
            ))} */}
          </ul>
        </div>
      )}
    </>
  )
}

export default Error
