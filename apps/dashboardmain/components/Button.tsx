import React, {useState} from 'react'
import SvgLoader from './svg/Loading'

type Type = 'button' | 'submit' | 'reset' | undefined
type Props = {
  text: string
  loadingState: boolean
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
  classname: string[]
  type: Type
}

const Button = ({text, loadingState, setLoading, classname, type}: Props) => {
  // const [loading, setLoading] = useState(false)
  const classnames = classname.join(' ')
  return (
    <button
      onClick={() => setLoading && setLoading(true)}
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
