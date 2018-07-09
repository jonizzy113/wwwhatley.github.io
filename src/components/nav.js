import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Title1, Title3, Column, Text, Row } from '../theme/index'
import Headshot from '../assets/william.png'
import Medium from '../assets/medium.svg'
import Github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'

const StyledColumn = styled(Column)`
  height: 100vh;
  width: 325px;
  background-color: #3d4c54;
  @media (max-width: 720px) {
    width: 100%;
    height: 30%;
    align-items: center;
  }
`

const Img = styled.img`
  width: 215px;
  height: 215px;
  margin-top: 1.5em;
`

const Title2 = styled.h2`
  font-family: 'Fira Sans', sans-serif;
  font-size: 1.2em;
  color: #ecc090;
  margin: 0;
  letter-spacing: 0.1em;
`

const StyledTitle3 = styled(Title3)`
  color: #a9cd95;
  font-size: 1.2em;
`

const StyledLink = styled(Link)`
  font-size: 1em;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  color: #8db5ea;
  text-decoration: none;
  letter-spacing: 0.1em;
  padding: 0.3em;
  margin: 0.2em 0;
  &:hover {
    background-color: #84b0e3;
    color: #dad996;
    font-weight: 600;
  }
`

const Icon = styled.img`
  width: 30px;
  height: 30px;
`

const TitleColumn = styled(Column)`
  margin: 0 0 1em 2.6em;
  @media (max-width: 720px) {
    margin: 0 0 1em 0;
  }
`

const activeLinkStyle = {
  color: '#DAD996',
  backgroundColor: '#84B0E3',
  fontWeight: '600',
}

const Nav = () => (
  <StyledColumn>
    <Row justifycontent="center" margin="1em 0 0 0">
      <Img src={Headshot} alt="Will's Headshot" />
    </Row>
    <TitleColumn>
      <StyledTitle3 margin=".8em 0 .2em 0">
        Personal Blog & Site of
      </StyledTitle3>
      <Title2 margin=".2em 0">William W. Whatley</Title2>
    </TitleColumn>
    <Column margin="0 2em">
      <StyledLink exact to="/" activeStyle={activeLinkStyle}>
        Home
      </StyledLink>
      <StyledLink to="/about" activeStyle={activeLinkStyle}>
        About
      </StyledLink>
      <StyledLink to="/now" activeStyle={activeLinkStyle}>
        What am I doing now?
      </StyledLink>
      <StyledLink to="/tools" activeStyle={activeLinkStyle}>
        My Tools
      </StyledLink>
    </Column>
    <Row margin="2em auto" justifycontent="space-evenly" width="80%">
      <a href="https://medium.com/@wwwhatley" target="_blank">
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
