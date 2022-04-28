import styled from 'styled-components'
import Colors from 'theme/Colors'
import { Device } from 'theme/Responsive'

export const StyledNavbar = styled.nav`
    overflow: hidden;
    background-color: ${Colors.bgColor};
    position: fixed;
    width: 100%;
    z-index: 1;
`

export const Container = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 3rem;

    & > a {
        float: left;
        color:  ${Colors.fontColor};
        text-align: center;
        text-decoration: none;
        font: normal normal normal 24px Helvetica Neue;
        &:hover {
            color: ${Colors.hoverNav}
        }
    };

    @media ${Device.mobile} {
        padding: 0 0 0 1rem;

        & > a {
            font: bold normal normal 18px Helvetica Neue;
            margin: 0 0.5rem
        }
    }
`

export const Routes = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding:0;
    
    & > a {
        display: flex;
        float: left;
        color:  ${Colors.fontColor};
        text-align: center;
        padding: 1rem 1rem;
        text-decoration: none;
        font: normal normal normal 20px Helvetica Neue;

        &:hover {
            color: ${Colors.hoverNav}
        };

        & > svg {
            margin-left: 0.5rem;
            width: 2.5rem;
            height: 2.5rem;
        };

        @media ${Device.mobile} {
            padding: 1rem 0rem;
          
            & > svg {
                margin-left: 0.7rem;
            }
        }
    }
`
