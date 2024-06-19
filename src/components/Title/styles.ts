import styled from 'styled-components'

import { colors, breakpoints } from '../../styles'

export const Title = styled.h1`
  background-color: ${colors.white};
  color: ${colors.black};
  padding: 8px;
  margin-bottom: 24px;
  border: 3px solid ${colors.black};
  border-radius: 12px;
  text-align: center;
  font-size: 20px;

  @media (max-width: ${breakpoints.tablet}) {
      font-size: 16px;
      padding: 4px;
      margin-bottom: 12px;
    }
`
