import styled from 'styled-components'

import { colors, breakpoints } from '../../styles'

export interface PropsStyles {
  isFirstText?: boolean
}

export const Text = styled.p<PropsStyles>`
  color: ${colors.white};
  text-align: justify;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 8px;
  margin-top: ${(props) => props.isFirstText ? '16px' : '0'};

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: ${(props) => props.isFirstText ? '8px' : '0'};
  }
`
