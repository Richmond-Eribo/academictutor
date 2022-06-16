import * as React from 'react'
type Props = {
  children: React.ReactNode
}
export const Button = ({children}: Props) => {
  return <button className='bg-slate-500 p-3'>{children}</button>
}
