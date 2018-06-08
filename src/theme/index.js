import styled from 'styled-components'

export const Title1 = styled.h1`
    font-family: 'Fira Sans', sans-serif;
    font-size: 2em;
    font-weight: 600;
    color: #ECC090;
`

export const Title2 = styled.h2`
    margin: ${props => props.margin || '.5em 0'}
    font-family: 'Fira Sans', sans-serif;
    font-size: 1.6em;
    color: #7FC1CA;
`

export const Title3 = styled.h3`
    margin: ${props => props.margin || '.5em 0'}
    color: #5882A0;
    font-size: 1.2em;
    font-family: 'Fira Sans', sans-serif;
    font-weight: 300;
`

export const Text = styled.p`
    
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${props => props.margin}
    align-items: ${props => props.alignitems};
`
