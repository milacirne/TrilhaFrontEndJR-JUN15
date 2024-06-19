import styled from 'styled-components'

import { breakpoints } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  row-gap: 24px;
  column-gap: 32px;
  margin-top: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 24px;
  }
`

export const Icon = styled.img`
  height: 48px;
  width: 96px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.10);
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 40px;
    width: 80px;
  }
`