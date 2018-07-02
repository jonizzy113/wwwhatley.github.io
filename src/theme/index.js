import styled from 'styled-components'

export const Title1 = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: 2.2em;
  font-weight: 600;
  color: #ecc090;
  margin: ${props => props.margin || '1em 0 0.5em 0'};
`

export const Title2 = styled.h2`
    margin: ${props => props.margin || '.5em 0'}
    font-family: 'Raleway', sans-serif;
    font-size: 1.6em;
    font-weight: 400;
    color: #7FC1CA;
`

export const Title3 = styled.h3`
    margin: ${props => props.margin || '.5em 0'}
    color: #5882A0;
    font-size: 1.1em;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
`

export const Text = styled.p`
    font-family: 'Open Sans', sans-serif;
    color: ${props => props.color || '#fff'};
    margin: ${props => props.margin || '.5em 0'}
    font-weight: ${props => props.fontweight || '300'}
    letter-spacing: .1em;
    font-size: .85em;
    line-height: 2em;
    font-weight: 300;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${props => props.margin}
    align-items: ${props => props.alignitems};
    justify-content: ${props => props.justifycontent};
    padding: ${props => props.padding};
    width: ${props => props.width};
`
export const Row = styled.div`
  display: flex;
  justify-content: ${props => props.justifycontent};
  align-items: ${props => props.alignitems};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
`
