import React from 'react'
import styled from 'styled-components'
import { Title1, Title2, Text, Column, Row } from '../theme/index'

const About = () => (
  <Column padding="1em 2em" width="85%">
    <Title1 margin="1em 0 0 0">A little about me...</Title1>
    <Title2>Hello!</Title2>
    <Row margin=".8em 0">
      <Text>
        My name is William Wilson Whatley--yes, triple W. Ironically I became a
        web developer, although I was named after my Grandfather, also triple W;
        and of course, he was born far before the World Wide Web. I'm a friend,
        mentor, mentee, and I currently serve as Chief Executive Officer at
        Subchannel. A native of Atlanta, GA, I've spent the last few years in
        sunny St. Petersburg, FL, although I have plans to move back to Atlanta
        soon.
      </Text>
    </Row>
    <Row>
      <Text>
        I am passionately curious about innovative technologies, business,
        teaching, and a sustainable future. I live a life guided agilely in
        principle, with open lenses and mind towards solving problems--I'm
        rooted in belief that continued self-development is one of the most
        important virtues; as times change and problems are solved, more issues
        to fix emerge. I commit to a life of problem solving.
      </Text>
    </Row>
    <Row>
      <Text>
        I'm also an avid outdoorsman and enjoy backpacking through north GA's
        Blue Ridge Mountains. I also love beer, coffee, and traveling!
      </Text>
    </Row>
  </Column>
)

export default About
