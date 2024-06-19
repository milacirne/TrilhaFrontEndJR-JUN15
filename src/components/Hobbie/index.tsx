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
      <li><S.Icon src={sushi} alt='Sushi'/></li>
      <li><S.Icon src={series} alt='Sofa e Pipoca'/></li>
      <li><S.Icon src={controller} alt='Controle de Video-Game'/></li>
      <li><S.Icon src={dice} alt='Dado de RPG'/></li>
      <li><S.Icon src={cat} alt='Gato'/></li>
      <li><S.Icon src={travel} alt='Avião viajando'/></li>
    </S.Container>
  )
}

export default Hobbie
