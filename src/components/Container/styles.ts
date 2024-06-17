import styled from 'styled-components'

import { colors } from '../../styles'

export const Container = styled.div`
    position: absolute;
    margin: auto;
    padding: 12px;
    background-color: ${colors.white};
    color: ${colors.red};
    width: 960px;
    height: 640px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1), 2px 0 4px rgba(0, 0, 0, 0.1), -2px 0 4px rgba(0, 0, 0, 0.1);
`
