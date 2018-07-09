import React from 'react'
import styled from 'styled-components'
import { Title1, Title2, Title3, Text, Column, Row } from '../theme/index'
import Footer from '../components/footer'

const Span = styled.span`
  font-weight: 600;
  font-style: italic;
`

const Activity = ({ company, title, text1, text2, text3 }) => (
  <div>
    <Title2>{company}</Title2>
    <Title3>{title}</Title3>
    <Text>{text1}</Text>
    <Text>{text2}</Text>
    <Text>{text3}</Text>
  </div>
)

const Now = () => (
  <Column padding="1em 2em" width="85%">
    <Title1>What am I up to now?</Title1>
    <Activity
      company="Subchannel"
      title="CEO | Developer, September 2017 -- Present"
      text1=" In Setember of 2017, I met my business partner J Miles--J and I set out to
     create a broadcast workflow solution which would
      allow broadcasters and organizations to launch, manage and monetize from
      their own secure and branded internet TV network.
    Shortly after, Raj Vanteddu and Getro Jean-Claude joined the founding
    team, each bringing their prospective subject matter expertise to the
    table."
      text2=" Since the conception of Subchannel, I've been tasked as CEO to manage the
    direction, vision, and culture of the business. Through trial and error,
    we have taken a concept and positioned the company to go-to-market in
    August of 2018, with our first B2B SaaS offering--this has been a combined
    effort by the founding team, and three aditional engineers, and one
    designer. We're fortunate in the regard that we have two technical
    founders, myself and Raj, to manage the day-to-day of the engineering."
    />
    <Activity
      company="Catatek"
      title="Founder | Developer, July 2017 -- Present"
      text1="My first self-employed venture was Catatek--a website and technology 
      consulting firm based in St. Petersburg, FL. I maintain relationships with 
      clients and serve them with a variety of services."
    />
    <Activity
      company="Pinellas County Education Foundation"
      title="Mentor August 2017 -- May 2018"
      text1="I am a mentor for the Pinellas County Education Foundation program, 
      Next Generation Tech. With the collaborative assistance of variously skilled 
      and experienced industry leaders, the mentor team is responsible for contributing 
      structure to high school students' software projects. We assist in teaching the 
      students Agile and Waterfall software development methodologies, UI/UX design, 
      market validation, business structure, brand techniques, execution of tasks, 
      and presentation skills."
    />
    <Activity
      company="OnUp"
      title="Stand in Chief Technologist, October 2017 -- January 2018"
      text1="Starting October of 2017, I joined the OnUp team alongside Mike Kelly, 
      former CEO of an at-scale payment processing company. I assisted Mike in ideating
      an employee engagement platform designed to address the growing deficit accrued by
      undesired employee attrition. My duties were to create the design system structure,
      design visual elements such as user interface and user flow, program using technologies
      such as React.JS and Node.JS, and attend high-level meetings with CEO's and executives from
      large-scale companies."
    />

    <Footer />
  </Column>
)

export default Now
