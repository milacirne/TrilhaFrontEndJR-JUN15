import styled from 'styled-components'

import { colors, breakpoints } from '../../styles'

export const Subtitle = styled.h2`
  color: ${colors.white};
  text-align: start;
  font-size: 18px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`
