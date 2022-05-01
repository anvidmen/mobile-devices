import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    @media only screen and (max-width: 667px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 1rem
    }
`