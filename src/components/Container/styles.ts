import styled from 'styled-components'

import { colors, breakpoints } from '../../styles'

export const Container = styled.div`
    margin: auto;
    padding: 12px;
    width: 1048px;
    height: 656px;
    background-color: ${colors.white};
    color: ${colors.red};
    border: 3px solid ${colors.black};
    border-radius: 8px;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1), 2px 0 4px rgba(0, 0, 0, 0.1), -2px 0 4px rgba(0, 0, 0, 0.1);

    @media (max-width: ${breakpoints.desktop}) {
      width: 80%;
      height: auto;
    }

    @media (max-width: ${breakpoints.tablet}) {
      padding: 4px 4px 0;
      margin: 32px auto;
    }

    .subtitle-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .gif {
        max-width: 100%;
        height: 40px;
        border-radius: 5px;

        @media (max-width: ${breakpoints.tablet}) {
          height: 32px;
        }
      }
    }
`
