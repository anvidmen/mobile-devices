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
    max-width: 16rem;
    height: 26rem;
    margin: 1rem;
    padding: 1rem;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 7px;
`

export const Title = styled.label`
    font: normal bolder normal 25px Helvetica Neue;
    margin-bottom: 5px;
`

export const TextContent = styled.label`
    font: normal bold normal 16px Helvetica Neue;
    margin: 2px;
`