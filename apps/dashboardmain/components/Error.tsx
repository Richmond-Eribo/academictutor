type Props = {
  errors: any
}

const Error = ({errors}: Props) => {
  return (
    <>
      {errors.length > 0 && (
        <div className=''>
          <ul className='mt-2'>
            {errors.map((error: any) => (
              <li key={error} className='text-red-400'>
                {error}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Error
