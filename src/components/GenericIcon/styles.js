import styled from 'styled-components'
import { Device } from 'theme/Responsive'

export const Amount = styled.label`
    display: flex;
    width: 2.4rem;
    height: 1.7rem;
    border: solid 1px white;
    border-radius: 10px;
    bottom: 20;
    position: relative;
    top: 10px;
    left: -4px;
    margin-right: 1rem;

    & > span {
        display: inline-block;
        margin: auto;
        vertical-align: middle;
        font-size: 1rem;
        color: white;
    }

    @media ${Device.mobile} {
        font-size: 0.9rem;
    }  
`