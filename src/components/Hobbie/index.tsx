import * as S from './styles'

import sushi from '../../assets/hobbies/sushi.svg'
import series from '../../assets/hobbies/series.svg'
import controller from '../../assets/hobbies/controller.svg'
import dice from '../../assets/hobbies/dice.svg'
import cat from '../../assets/hobbies/cat.svg'
import travel from '../../assets/hobbies/travel.svg'

const Hobbie = () => {
  return (
    <S.Container>
      <S.Icon src={sushi}/>
      <S.Icon src={series}/>
      <S.Icon src={controller}/>
      <S.Icon src={dice}/>
      <S.Icon src={cat}/>
      <S.Icon src={travel}/>
    </S.Container>
  )
}

export default Hobbie
