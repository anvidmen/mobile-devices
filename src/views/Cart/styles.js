import styled from 'styled-components'
import Colors from 'theme/Colors'
import { Device } from 'theme/Responsive'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;

    @media ${Device.mobile} {
        margin: 1rem
    } 
`
export const Title = styled.h1`
  font: normal bolder normal 30px Helvetica Neue;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;

  @media ${Device.mobile} {
    font: normal bolder normal 24px Helvetica Neue;
  }
`

export const ButtonItems = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const ExtraButtons = styled.div`
    display: flex;
    flex-direction: column;
  
    & > a { 
        letter-spacing: 0.1rem; 
        opacity: 1;
        border-radius: 6px;
        width: 10rem;
        height: 3rem;
        font: normal bold normal 18px italic;
        padding: 0 0.5rem 0 0.5rem;
        color: ${Colors.bgColor};
        margin: 1rem;
        text-decoration: none;
        text-align: center;
        vertical-align: middle;
        line-height: 2.9rem;
        border: 1px solid ${Colors.hoverNav};  

        :hover {
            cursor: pointer;
            box-shadow:2px 0 2px 2px rgba(0, 255, 255,.4) 
        } 
    };
  
    }

    @media ${Device.mobile} {
        align-items: center;
        flex-direction: column-reverse;

        & > a { 
            font-size: 16px;
            margin: 0.3rem;
        }
    } 
`

export const StyledButton = styled.button`
    border: 1px solid red;
    border-radius: 10px;
    opacity: 1;
    font: normal bold normal 18px italic;
    background: ${Colors.fontColor};
    width: 10rem;
    height: 3rem;
    margin: 1rem;
    text-align: center;
    outline: none;
    letter-spacing: 0.1rem; 
    
    &.clearCart{
        color: ${Colors.bgColor};
        
        &:focus{
            outline: red
        };

        &:hover {
            cursor: pointer;
            box-shadow: 2px 0 2px 2px rgba(255, 0, 0, .4)
        }
    };

    @media ${Device.mobile} {
        font: normal bold normal 16px Helvetica Neue;
        margin-top: 0.5rem;
    } 
`
