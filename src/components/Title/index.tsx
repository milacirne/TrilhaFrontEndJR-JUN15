import { ReactNode } from 'react'

import { Title as TitleStyle } from './styles'

interface Props {
  children: ReactNode
}

const Title = ({ children } : Props) => {
  return (
    <TitleStyle>{children}</TitleStyle>
  )
}

export default Title
