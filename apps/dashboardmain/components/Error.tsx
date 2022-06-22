type Props = {
  errors: []
}

const Error = ({errors = []}: Props) => {
  return (
    <>
      {errors.length > 0 && (
        <div className=''>
          <p className='text-red-400'>Error</p>

          <ul className='mt-2'>
            {errors.map(error => (
              <li key={error}>error</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Error
