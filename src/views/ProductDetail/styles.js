import styled from "styled-components";
import Colors from "theme/Colors";
import { Device } from "theme/Responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font: normal bolder normal 44px Helvetica Neue;
  margin-bottom: 4rem;

  @media ${Device.mobile} {
    margin-bottom: 2rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  & > div {
    width: 31rem;

    @media ${Device.mobile} {
      width: 21rem;
    }
  }

  @media ${Device.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Image = styled.img`
  width: 15rem;
  height: 25rem;
  margin: 0 5rem;
  
  @media ${Device.mobile} {
    width: 12rem;
    height: 20rem;
    margin-bottom: 2rem
  }
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    & > h4 {
      font: normal normal normal 16px Helvetica Neue;
    }
`

export const SubTitle = styled.h2`
  font: normal bolder normal 26px Helvetica Neue;
  margin-bottom: 0.5rem
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  & > div {
    display: flex;
    flex-direction: row;

    & > h4 {
      font: normal normal normal 16px Helvetica Neue;
      margin-right: 1rem
    }
     
    & > div {
      margin-right: 1rem;

      label {
        margin-left: 0.3rem;
      }
    }
  }
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-direction: row;
  
    & > a { 
        opacity: 1;
        border-radius: 6px;
        width: 10rem;
        height: 3rem;
        font: normal normal normal 18px Helvetica Neue;
        color: ${Colors.bgColor};
        margin: 1rem;
        text-decoration: none;
        text-align: center;
        vertical-align: middle;
        line-height: 2.9rem;
        border: 1px solid ${Colors.hoverNav};

        &:hover {
            cursor: pointer;
            box-shadow: 2px 0 2px 2px rgba(0, 255, 255,.3)
        }
    };
`

export const StyledButton = styled.button`
  top: 0;
  text-transform: capitalize;
  font-size: 1.4rem;
  border: ${props => props.disabled ? `1px solid red`: `1px solid ${Colors.hoverNav}`} ;
  border-radius: 6px;
  opacity: 1;
  font: normal normal normal 18px Helvetica Neue;
  width: 10rem;
  height: 3rem;
  margin: 0.3rem;
  margin-top: 2rem;
  text-align: center;
  outline: none;

  &.styleButton {
      background: ${Colors.fontColor};
      color: ${props => props.disabled? "red" : "black"};
      
      &:hover {
          cursor: ${props => props.disabled ? "": "pointer"};
          box-shadow: ${props => props.disabled ? "" : "2px 0 2px 2px rgba(0, 255, 255,.3)"}
      }
  }

`
