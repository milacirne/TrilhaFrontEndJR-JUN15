import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  row-gap: 24px;
  column-gap: 32px;
  margin-top: 32px;
`

export const Icon = styled.img`
  height: 48px;
  width: 96px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.10);
  }
`
