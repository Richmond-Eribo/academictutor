import {Type} from 'interfaces/types'
import React, {ReactNode, useState} from 'react'
import SvgLoader from './svg/Loading'

type Props = {
  text?: string
  loadingState?: boolean
  onClickFunction?: () => void
  classname?: string[]
  type: Type
  children?: ReactNode
}

const Button = ({
  text,
  loadingState,
  onClickFunction,
  classname,
  type,
  children,
}: Props) => {
  // const [loading, setLoading] = useState(false)
  const classnames = classname?.join(' ')
  return (
    <button
      onClick={onClickFunction}
      disabled={loadingState}
      type={type}
      className={`${classnames}`}
    >
      {/* {text} */}
      {children ? (
        <div>{children}</div>
      ) : (
        <div>{loadingState === true ? <SvgLoader /> : <p>{text}</p>}</div>
      )}
    </button>
  )
}

export default Button
