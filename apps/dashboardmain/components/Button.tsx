import {Type} from 'interfaces/types'
import React, {useState} from 'react'
import SvgLoader from './svg/Loading'

type Props = {
  text: string
  loadingState: boolean
  onClickFunction?: () => void
  classname: string[]
  type: Type
}

const Button = ({
  text,
  loadingState,
  onClickFunction,
  classname,
  type,
}: Props) => {
  // const [loading, setLoading] = useState(false)
  const classnames = classname.join(' ')
  return (
    <button
      onClick={onClickFunction}
      disabled={loadingState}
      type={type}
      className={`${classnames}`}
    >
      {/* {text} */}
      {loadingState === true ? <SvgLoader /> : <p>{text}</p>}
    </button>
  )
}

export default Button
