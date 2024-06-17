import { ReactNode } from 'react'

import { Field as FieldStyle } from './styles'

interface Props {
  children: ReactNode
}

const Field = ({ children } : Props) => {
  return (
    <FieldStyle>{children}</FieldStyle>
  )
}

export default Field
