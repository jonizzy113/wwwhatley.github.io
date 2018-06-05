import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Title1, Title2, Title3 } from '../theme/index'

const Row = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 300px;
    background-color: #3D4C54;
`

const Nav = () => (
  <Row>
    <Title1>Hey</Title1>
    <Title2>Hey</Title2>
    <Title3>Hey</Title3>
  </Row>
)

export default Nav
