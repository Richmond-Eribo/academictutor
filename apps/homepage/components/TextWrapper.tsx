import React, {ReactNode} from 'react'

type Props = {
  children: ReactNode
  // width: number
}

function TextWrapper({children}: Props) {
  return (
    <article className={` text-text-light`}>
      {children}
      <style jsx>{`
        p {
          margin-bottom: 3px;
        }
      `}</style>
    </article>
  )
}

export default TextWrapper
