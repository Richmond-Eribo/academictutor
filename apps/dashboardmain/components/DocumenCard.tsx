import {FC} from 'react'

type Props = {
  documentName: string
  isVerified: number
  verifyDocument: () => void
  unverifyDocument: () => void
  downloadDocumentName: string
  // ty?: (a: string) => void
}

const DocumenCard: FC<Props> = ({
  documentName,
  isVerified,
  verifyDocument,
  unverifyDocument,
  downloadDocumentName,
}) => {
  return (
    <div className='my-2 py-3 flex-col lg:flex-row lg:w-[514px] lg:h-[60px] flex bg-[#F0FBFF] rounded-2xl  items-center justify-between px-3'>
      <p>{documentName}</p>

      <div className='mt-5 lg:mt-0'>
        <button>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/download-file/${downloadDocumentName}`}
            download={documentName}
            className='lg:w-[95px] p-2 hover:bg-primary-dark  w-[80px] h-[35px] bg-primary-light  duration-150  rounded-xl text-white'
          >
            Download
          </a>
        </button>

        {isVerified === 0 ? (
          <button
            onClick={verifyDocument}
            className='lg:w-[95px] mx-2 w-[80px] h-[35px] hover:bg-primary-dark bg-primary-light  duration-150  rounded-xl text-white'
          >
            Verify
          </button>
        ) : (
          <button
            onClick={unverifyDocument}
            className='lg:w-[95px] mx-2 w-[80px] h-[35px] bg-secondary-mid hover:bg-secondary-dark duration-150  rounded-xl text-white '
          >
            Unverify
          </button>
        )}
      </div>
    </div>
  )
}

export default DocumenCard
