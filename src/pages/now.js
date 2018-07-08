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
      company="OnUp"
      title="Stand-in Chief Technologist, October 2017 -- January 2018"
    />

    <Footer />
  </Column>
)

export default Now
