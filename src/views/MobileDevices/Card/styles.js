import styled from 'styled-components'
import Colors from 'theme/Colors'

export const StyleCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: ${Colors.fontColor} 0% 0% no-repeat padding-box;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    box-shadow: 1px 3px 6px 3px #00000039;
    overflow: hidden;
    width: 17rem;
    height: 23rem;
    margin: 1rem;
    padding: 1rem;
`

export const Image = styled.img`
    position: relative;
    overflow: hidden;
    width: 10rem;
    height: 12rem;

    &:hover {
      transform: scale(1.1);
      transition: all 1s linear;
    }
`

export const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    transition: all 1s linear;
    margin-top: 2rem;
    width: 100%;
    height:100%;
`

export const Title = styled.label`
    font: normal bolder normal 25px Helvetica Neue;
    margin-bottom: 2rem;
`

export const TextContent = styled.label`
    font: ${props => props.price ? "normal bold normal 14px italic": "normal bold normal 16px italic"};
    color: ${props => props.price? "red": "black"};
    margin-top: 1rem
`