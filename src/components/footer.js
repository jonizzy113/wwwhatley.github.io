import React from 'react'
import styled from 'styled-components'
import { Text } from '../theme/index'

const StyledRow = styled.div`
  width: 100%;
  height: 15px;
  display: flex;
  align-items: center;
  position: relative;
  bottom: 0;
  background-color: #2f3940;
  margin: 2.5em 0 0.5em 0;
`

const Span = styled.span`
  color: red;
`

const Footer = () => (
  <StyledRow>
    <Text fontsize=".7em" color="#ccc">
      <span>&#169;</span>2018 William Whatley | Made with <Span>&#9829;</Span>{' '}
      using Gatsby.JS + React.JS |
      <a href="https://trevordmiller.com/projects/nova" target="_blank">
        Color scheme by Nova
      </a>
    </Text>
  </StyledRow>
)

export default Footer
