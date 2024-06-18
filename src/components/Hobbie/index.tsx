import * as S from './styles'

import cat from '../../assets/hobbies/cat.svg'
import netflix from '../../assets/hobbies/netflix.svg'
import nswitch from '../../assets/hobbies/nswitch.svg'
import onepiece from '../../assets/hobbies/one-piece.svg'
import pokemon from '../../assets/hobbies/pokemon.svg'
import travel from '../../assets/hobbies/travel.svg'

const Hobbie = () => {
  return (
    <S.Container>
      <S.Icon src={cat}/>
      <S.Icon src={netflix}/>
      <S.Icon src={nswitch}/>
      <S.Icon src={onepiece}/>
      <S.Icon src={pokemon}/>
      <S.Icon src={travel}/>
    </S.Container>
  )
}

export default Hobbie
