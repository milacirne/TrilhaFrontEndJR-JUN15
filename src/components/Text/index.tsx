import { ReactNode } from 'react'

import { PropsStyles, Text as TextStyle } from './styles'

interface Props extends PropsStyles {
  children: ReactNode
}

const Text = ({ children, isFirstText, isLastText } : Props) => {
  return (
    <TextStyle isFirstText={isFirstText} isLastText={isLastText}>{children}</TextStyle>
  )
}

export default Text
