import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Title1, Title3, Column, Text } from '../theme/index'
import Headshot from '../assets/william.png'
import Medium from '../assets/medium.svg'
import Github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'

const StyledColumn = styled(Column)`
    height: 100vh;
    width: 300px;
    background-color: #3D4C54;
`

const Img = styled.img`
  width: 250px;
  height: 250px;
`

const Row = styled.div`
  display: flex;
  justify-content: ${props => props.justifycontent};
  margin: ${props => props.margin};
  width: ${props => props.width};
`

const Title2 = styled.h2`
  font-family: 'Fira Sans', sans-serif;
  font-size: 1.2em;
  color: #ECC090;
  margin: 0;
  letter-spacing: .1em;
`
const StyledLink = styled(Link)`
  font-size: 1em;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  color: #8DB5EA;
  text-decoration: none;
  margin: .4em 0;
  letter-spacing: .1em;
`

const Icon = styled.img`
  width: 30px;
  height: 30px;
`

const Nav = () => (
  <StyledColumn>
    <Row justifycontent="center" margin="1em 0 0 0">
      <Img src={Headshot} alt="Will's Headshot" />
    </Row>
    <Column alignitems="center" margin="0 0 1em 0">
      <Title3 margin=".8em 0 .2em 0">Personal Blog & Site of</Title3>
      <Title2 margin=".2em 0">William W. Whatley</Title2>
    </Column>
    <Column margin="0 2.2em">
      <StyledLink to="/test" activeStyle={{ color: 'red' }}>
        Home
      </StyledLink>
      <StyledLink to="/test" activeStyle={{ color: 'red' }}>
        About
      </StyledLink>
      <StyledLink to="/test" activeStyle={{ color: 'red' }}>
        What am I doing now?
      </StyledLink>
      <StyledLink to="/test" activeStyle={{ color: 'red' }}>
        Posts
      </StyledLink>
      <StyledLink to="/test" activeStyle={{ color: 'red' }}>
        My Tools
      </StyledLink>
    </Column>
    <Row margin="2em auto" justifycontent="space-evenly" width="80%">
      <a href="https://medium.com/@william_54828" target="_blank">
        <Icon src={Medium} alt="Will's Medium" />
      </a>
      <a href="https://github.com/wwwhatley" target="_blank">
        <Icon src={Github} alt="Will's Github" />
      </a>
      <a
        href="https://www.linkedin.com/in/william-whatley-9b141b148/"
        target="_blank"
      >
        <Icon src={Linkedin} alt="Will's Linkedin" />
      </a>
    </Row>
  </StyledColumn>
)

export default Nav
