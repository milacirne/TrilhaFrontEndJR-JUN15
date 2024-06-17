import styled from 'styled-components'

import { colors } from '../../styles'

export interface Props {
  progress?: number
  isFirstBar?: boolean
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 8px;
  margin-top: ${(props) => props.isFirstBar ? '28px' : '0'};
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 8px;
`

export const StatusBar = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 24px;
  border: 1px solid ${colors.white};
  border-radius: 4px;
  margin-bottom: 8px;

  .progressBar {
    background-color: ${colors.white};
    margin: 2px;
    height: 100%;
    width: ${props => props.progress}%;
    align-items: center;
    border-radius: 4px;
  }
`
