import styled from 'styled-components'

import { colors, breakpoints } from '../../styles'

export interface Props {
  progress?: number
  isFirstBar?: boolean
  isLastBar?: boolean
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-top: ${(props) => props.isFirstBar ? '18px' : '0'};
  margin-bottom: ${(props) => props.isLastBar ? '0' : '8px'};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 0;
    margin-bottom: ${(props) => props.isLastBar ? '0' : '4px'};
  }
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 18px;
    height: 18px;
  }
`

export const StatusBar = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 24px;
  border: 1px solid ${colors.white};
  border-radius: 4px;
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    height: 18px;
  }

  .progressBar {
    background-color: ${colors.white};
    margin: 2px;
    height: 100%;
    width: ${props => props.progress}%;
    align-items: center;
    border-radius: 4px;
  }
`
