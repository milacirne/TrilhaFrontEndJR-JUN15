import { ReactNode } from 'react'

import { Subtitle as SubtitleStyle } from './styles'

interface Props {
  children: ReactNode
}

const Subtitle = ({ children } : Props) => {
  return (
    <SubtitleStyle>{children}</SubtitleStyle>
  )
}

export default Subtitle
