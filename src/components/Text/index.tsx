import { ReactNode } from 'react'

import { PropsStyles, Text as TextStyle } from './styles'

interface Props extends PropsStyles {
  children: ReactNode
}

const Text = ({ children, isFirstBar } : Props) => {
  return (
    <TextStyle isFirstBar={isFirstBar}>{children}</TextStyle>
  )
}

export default Text
