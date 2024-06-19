import Avatar from "../../components/Avatar"
import Title from "../../components/Title"
import Subtitle from "../../components/Subtitle"
import Field from "../../components/Field"
import StatusBar from "../../components/StatusBar"
import Text from "../../components/Text"
import Hobbie from "../../components/Hobbie"

import intelligence from '../../assets/icons/intelligence.svg'
import defense from '../../assets/icons/defense.svg'
import hp from '../../assets/icons/hp.svg'
import mana from '../../assets/icons/mana.svg'
import initiative from '../../assets/icons/initiative.svg'
import trainer from '../../assets/trainer.gif'

import * as S from "./styles"

const Home = () => {

  return (
    <S.Container>
      <div className="grid-item">
        <Title>FICHA DE PERSONAGEM</Title>
        <Avatar />
        <Field />
        <StatusBar progress={75} icon={hp} isFirstBar></StatusBar>
        <StatusBar progress={60} icon={intelligence}></StatusBar>
        <StatusBar progress={50} icon={defense}></StatusBar>
        <StatusBar progress={80} icon={mana}></StatusBar>
        <StatusBar progress={85} icon={initiative} isLastBar></StatusBar>
      </div>
      <div className="grid-item">
        <div className="subtitle-container">
          <Subtitle>A jornada por trás da heroína</Subtitle>
          <img src={trainer} className="gif"/>
        </div>
        <Text isFirstText>Camila é uma jovem geek apaixonada por tecnologia. Aos dez anos, já criava websites com o Microsoft Front Page, revelando uma paixão inata pelo mundo digital.</Text>
        <Text>Após uma jornada enriquecedora na Irlanda, onde aprimorou seu inglês e ampliou seus horizontes, Camila decidiu trilhar um novo caminho: o Desenvolvimento Front-End.</Text>
        <Text>Determinada a dominar o código, ela iniciou sua jornada com um curso de Desenvolvimento Full Stack. Sua mente ágil, alimentada por cursos online e bootcamps, equipou-a para construir um futuro brilhante no mundo digital.</Text>
        <Text isLastText>O objetivo de Camila hoje é evoluir e se tornar uma mestra do código, pronta para desvendar os segredos da programação e criar soluções inovadoras para ajudar as pessoas. Sua paixão pela tecnologia e sua mente perspicaz são suas maiores armas, guiando-a em sua aventura épica.</Text>
      </div>
      <div className="grid-item">
        <Subtitle>Missões e Motivações</Subtitle>
        <Text isFirstText>
          Ao se unir à comunidade Codigo Certo Coders, Camila vê uma oportunidade única de evoluir suas habilidades mágicas na programação. Desenvolver alianças estratégicas com outros magos tecnológicos e enfrentar desafios épicos fortalecerá seu caminho rumo à maestria.
        </Text>
        <Text isLastText>
          Camila sente um chamado para usar suas habilidades de magia tecnológica em prol da sociedade. Ela acredita firmemente que o conhecimento técnico pode ser uma ferramenta poderosa para resolver problemas e melhorar vidas.
        </Text>
      </div>
      <div className="grid-item">
        <Subtitle>Paixões da Aventureira</Subtitle>
        <Hobbie />
      </div>
    </S.Container>
  )
}

export default Home
