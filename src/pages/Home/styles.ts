import styled from 'styled-components'

import { colors } from '../../styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 12px;
  text-align: center;
  color: ${colors.red};
  height: 100%;

  .grid-item {
    background-color: ${colors.red};
    border-radius: 8px;
    padding: 24px 16px;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1), 2px 0 4px rgba(0, 0, 0, 0.1), -2px 0 4px rgba(0, 0, 0, 0.1);
  }

  .big-vertical {
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
  }

  .big-horizontal {
    grid-column: 2 / span 2;
    grid-row: 1 / span 1;
  }
`
