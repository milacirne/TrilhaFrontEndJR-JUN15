import styled from 'styled-components'

import { colors, breakpoints } from '../../styles'

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
  }
`

export const Field = styled.li`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 12px;
  text-align: start;

  span {
    font-weight: 700;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`
