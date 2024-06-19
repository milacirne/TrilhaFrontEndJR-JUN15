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
      <li><S.Icon src={sushi}/></li>
      <li><S.Icon src={series}/></li>
      <li><S.Icon src={controller}/></li>
      <li><S.Icon src={dice}/></li>
      <li><S.Icon src={cat}/></li>
      <li><S.Icon src={travel}/></li>
    </S.Container>
  )
}

export default Hobbie
