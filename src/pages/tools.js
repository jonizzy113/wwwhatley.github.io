import React from 'react'
import styled from 'styled-components'
import { Title1, Title2, Title3, Text, Column, Row } from '../theme/index'

const StyledTitle3 = styled(Title3)`
  color: #a8ce93;
  font-weight: 600;
`

const A = styled.a`
  text-decoration: underline;
`

const others = [
  'Gatsby.JS',
  'Node.JS',
  'CRA',
  'Firebase',
  'Postman',
  'Git',
  'Github',
  'GitKraken',
  'iTerm2',
  'Nova Theme',
  'CircleCI',
  'Cypress',
  'Prettier',
  'ESLint',
]

const Tools = () => {
  return (
    <Column padding="1em 2em" width="85%">
      <Title1 margin="1em 0 0 0">On my toolbelt</Title1>
      <Text>
        Most professions require some variety of tools in order to efficiently
        and effectively do what they do best. A developer is absolutely no
        exception--without my toolbelt, I without a doubt would not be able to
        do my job, period. The following are my trusted allies, my sharpest and
        shiniest weapons.
      </Text>
      <Title2>Development</Title2>
      <StyledTitle3>VS Code</StyledTitle3>
      <Row margin=" 0 0 .4em 0">
        <Text>
          Any developer who knows me would also know my general disatsifaction
          and loathing demeanor towards Microsoft products--VS Code is DEFINTELY
          the exception. I don't need a reason to be overly enthusiastic about
          the seemingly small things in life; my friend and mentor Raj will
          laugh as he tells you how excited I was to start using Atom once upon
          a time. How I would neverrrrrrrr not use Atom, then it was OMG
          WEBSTORM IS DA BEST. Now, and to stay (for the foreseeable future) is
          the greatest, lightest, most superior, bestest text editor slash
          pseudo IDE in the universe: {''}
          <A href="https://code.visualstudio.com/" target="_blank">
            Microsoft's VS Code.
          </A>
        </Text>
      </Row>
      <StyledTitle3>React.JS</StyledTitle3>
      <Row>
        <Text>
          React.JS by Facebook's open source team is a declarative, JS framework
          that provides an easy-to-use component-based API. Utilizing component
          methods like constructor(), render(), and setState(), you tell React
          what you want the UI to look like and its out of the box goodies take
          care of the DOM manipulation. Its wide-spread adoption is attributed
          to React's lightning-fast, modern look and feel. Since using it
          myself, I've built some really cool applications. The React ecosystem
          is full, vibrant, and seemingly here to stay. If you're looking at
          JavaScript and are wondering what framework to pick up, I would
          recommend React. Especially with its updates coming in Async
          rendering, which is speculated to blow Google's Angular out of the
          water.
        </Text>
      </Row>

      <StyledTitle3>Styled-Components</StyledTitle3>
      <Row>
        <Text>
          A friend of mine the other day asked if I still used styled-components
          and my response was "Do I?! I'm not sure how we developed before
          anymore." Point is, I love my styled-components. A lightweight
          library, styled-components combines ES6 syntax with CSS and results in
          the ability for you to create reusable, style-encapsulated components
          that compile down to html tags.
        </Text>
      </Row>
      <StyledTitle3>Chart.JS</StyledTitle3>
      <Row>
        <Text>
          A friend of mine the other day asked if I still used styled-components
          and my response was "Do I?! I'm not sure how we developed before
          anymore." Point is, I love my styled-components. A lightweight
          library, styled-components combines ES6 syntax with CSS and results in
          the ability for you to create reusable, style-encapsulated components
          that compile down to html tags.
        </Text>
      </Row>
      <StyledTitle3>Cypress</StyledTitle3>
      <Row>
        <Text>
          A friend of mine the other day asked if I still used styled-components
          and my response was "Do I?! I'm not sure how we developed before
          anymore." Point is, I love my styled-components. A lightweight
          library, styled-components combines ES6 syntax with CSS and results in
          the ability for you to create reusable, style-encapsulated components
          that compile down to html tags.
        </Text>
      </Row>
      <StyledTitle3>Others</StyledTitle3>
      <Row style={{ flexWrap: 'wrap' }}>
        {/* <ul> */}
        {others.map(i => {
          return (
            //   <li key={i}>
            <Text style={{ padding: '0 0 0 .6em', fontSize: '1.1em' }}>
              {i}
            </Text>
            //   </li>
          )
        })}
        {/* </ul> */}
      </Row>
    </Column>
  )
}

export default Tools
