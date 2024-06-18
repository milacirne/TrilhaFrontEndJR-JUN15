import styled from 'styled-components'

import { colors } from '../../styles'

export interface PropsStyles {
  isFirstBar?: boolean
}

export const Text = styled.p<PropsStyles>`
  color: ${colors.white};
  text-align: justify;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 8px;
  margin-top: ${(props) => props.isFirstBar ? '16px' : '0'};
`
