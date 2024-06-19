import { GlobalStyle } from './styles'

import Container from './components/Container'

import Home from './pages/Home'

function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Home />
      </Container>
    </>

  )
}

export default App

