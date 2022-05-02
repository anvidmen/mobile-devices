import styled from 'styled-components'
import { Device } from 'theme/Responsive'

export const Cart = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ccc;
    font: normal bolder normal 22px italic;

    & > div {
            margin-bottom: 1rem;
    }

    @media ${Device.mobile} {
        display: ${props => props.disable ? "none" : "flex"};
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;

        & > div {
            margin-bottom: .5rem;
        }
    } 
`

export const Item = styled.div`
    display: flex;
    margin-bottom: 2rem;
    font: normal normal normal 18px Helvetica Neue;

    :nth-child(2){
        width: 5rem
    }
    
    & > img {
        width: 4rem;
        
    }

    @media ${Device.mobile} {
        font: normal normal normal 16px Helvetica Neue;
        :nth-child(2){
            width: auto
        }
    } 
`

export const Price = styled.div`
    position: relative;
    font: normal bold normal 20px Helvetica Neue;

    @media ${Device.mobile} {
        font: normal bold normal 16px Helvetica Neue;
    }
`

export const Message = styled.div`
    font: normal bold normal 23px Helvetica Neue;
    text-align: center;
    padding: 2rem
`

export const Total = styled.div`
    font: normal bold normal 25px Helvetica Neue;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #ccc;

    & > p {
        margin-right: 1rem;
    } 

    @media ${Device.mobile} {
        font: normal bold normal 20px Helvetica Neue;
    } 
`

export const StyledButton = styled.button`
    border: none;
    opacity: 1;
    background: white;
    height: 0;

    &.styleButton {
        color: red;
        
        &:hover {
            cursor: pointer;
        }
    }

    @media ${Device.mobile} {
        height: auto;
    } 
`
