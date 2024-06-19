import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  red: '#e53939',
  black: '#000',
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
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

  html, body {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    background-color: ${colors.black};
    overflow-y: hidden;

    @media (max-width: ${breakpoints.desktop}) {
      height: auto;
      overflow-y: auto;
    }
  }

`
