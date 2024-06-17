import Avatar from "../../components/Avatar"
import Title from "../../components/Title"
import Field from "../../components/Field"
import StatusBar from "../../components/StatusBar"

import intelligence from '../../assets/icons/intelligence.svg'
import defense from '../../assets/icons/defense.svg'
import hp from '../../assets/icons/hp.svg'
import mana from '../../assets/icons/mana.svg'
import initiative from '../../assets/icons/initiative.svg'

import * as S from "./styles"

const Home = () => {
  return (
    <S.Container>
      <div className="grid-item big-vertical">
        <Title>Ficha de Personagem</Title>
        <Avatar />
        <Field><span>Nome: </span>Camila Cirne Paulino</Field>
        <Field><span>Raça: </span>Programadora</Field>
        <Field><span>Classe: </span>Desenvolvedora Front-end</Field>
        <Field><span>Idade: </span> 35 anos</Field>
        <StatusBar progress={75} icon={hp} isFirstBar></StatusBar>
        <StatusBar progress={60} icon={intelligence}></StatusBar>
        <StatusBar progress={50} icon={defense}></StatusBar>
        <StatusBar progress={80} icon={mana}></StatusBar>
        <StatusBar progress={85} icon={initiative}></StatusBar>
      </div>
      <div className="grid-item big-horizontal">
      </div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
    </S.Container>
  )
}

export default Home
