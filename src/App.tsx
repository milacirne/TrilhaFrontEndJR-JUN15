import { GlobalStyle } from './styles'

import Container from './components/Container'

import Home from './pages/Home'

function App() {

  return (
    <>
      <GlobalStyle />
      <div className='spacer layers'></div>
      <Container>
        <Home />
      </Container>
    </>

  )
}

export default App

