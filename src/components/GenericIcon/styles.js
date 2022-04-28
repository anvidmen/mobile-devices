import styled from 'styled-components'
import { Device } from 'theme/Responsive'

export const Amount = styled.label`
    display: flex;
    width: auto;
    height: auto;
    margin: auto;
    vertical-align: middle;
    font-size: 1rem;
    color: white;
    line-height: 0;
    font-size: 1rem;
    color: black;
    line-height: 0;
    position: relative;
    top: 7px;
    left: -27px;

    @media ${Device.mobile} {
        font-size: 0.9rem;
    }     
`
