import styled from 'styled-components'

import { colors } from '../../styles'

export const Avatar = styled.img`
  height: 136px;
  border-radius: 50%;
  background-color: ${colors.black};
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1), 2px 0 4px rgba(0, 0, 0, 0.1), -2px 0 4px rgba(0, 0, 0, 0.1);
  border: 3px solid ${colors.white};
  margin-bottom: 22px;
`
