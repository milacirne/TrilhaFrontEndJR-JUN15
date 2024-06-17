import { createGlobalStyle } from 'styled-components'
import layers from './assets/layers.svg'

export const colors = {
  white: '#fff',
  red: '#e53939',
  black: '#000',
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    height: 100vh;
    overflow-y: hidden;
    position: relative;
  }

  .spacer {
    aspect-ratio: 960/540;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .layers {
    background-image: url(${layers});
  }
`
