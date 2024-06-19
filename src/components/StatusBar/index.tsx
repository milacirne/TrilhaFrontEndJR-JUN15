import * as S from './styles'

import { Props as PropsStyles } from './styles'

interface Props extends PropsStyles {
  icon: string
}

const StatusBar = ({ icon, progress, isFirstBar, isLastBar } : Props) => {
  return (
    <S.Container isFirstBar={isFirstBar} isLastBar={isLastBar}>
      <S.StatusBar progress={progress}>
        <div className='progressBar' />
      </S.StatusBar>
      <S.Icon src={icon} />
    </S.Container>
  )
}

export default StatusBar
