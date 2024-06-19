import { ReactNode } from 'react'

import { PropsStyles, Text as TextStyle } from './styles'

interface Props extends PropsStyles {
  children: ReactNode
}

const Text = ({ children, isFirstText } : Props) => {
  return (
    <TextStyle isFirstText={isFirstText}>{children}</TextStyle>
  )
}

export default Text
