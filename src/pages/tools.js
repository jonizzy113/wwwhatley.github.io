import React from 'react'
import styled from 'styled-components'
import { Title1, Title2, Title3, Text, Column, Row } from '../theme/index'
import Link from 'gatsby-link'

const StyledTitle3 = styled(Title3)`
  color: #a8ce93;
  font-weight: 600;
  &:hover {
    color: #9a95df;
  }
`

const A = styled.a`
  text-decoration: underline;
  color: #fff;
  padding: 0.1em 0;
`

const others = [
  { name: 'Gatsby.JS', link: 'https://www.gatsbyjs.org/' },
  { name: 'Node.JS', link: 'https://nodejs.org/en/' },
  { name: 'CRA', link: 'https://github.com/facebook/create-react-app' },
  { name: 'Firebase', link: 'https://firebase.google.com/' },
  { name: 'Postman', link: 'https://www.getpostman.com/' },
  { name: 'Git', link: 'https://git-scm.com/' },
  { name: 'Github', link: 'https://github.com/' },
  { name: 'GitKraken', link: 'https://www.gitkraken.com/' },
  { name: 'iTerm2', link: 'https://www.iterm2.com/' },
  { name: 'Nova Theme', link: 'https://trevordmiller.com/projects/nova' },
  { name: 'CircleCI', link: 'https://circleci.com/' },
  { name: 'Cypress', link: 'https://www.cypress.io/' },
  { name: 'Prettier', link: 'https://github.com/prettier/prettier' },
  { name: 'ESLint', link: 'https://eslint.org/' },
]

const Tool = ({ title, text, link }) => {
  return (
    <div>
      <StyledTitle3>
        <a href={link} target="_blank">
          {title}
        </a>
      </StyledTitle3>
      <Row margin=" 0 0 .4em 0">
        <Text>{text}</Text>
      </Row>
    </div>
  )
}

const Tools = () => {
  return (
    <Column padding="1em 2em" width="85%">
      <Title1>On my toolbelt</Title1>
      <Text>
        Most professions require some variety of tools in order to efficiently
        and effectively do what they do best. A developer is absolutely no
        exception--without my toolbelt, I without a doubt would not be able to
        do my job, period. The following are my trusted allies, my sharpest and
        shiniest weapons.
      </Text>
      <Title2>Development</Title2>
      <Tool
        title="VS Code"
        link="https://code.visualstudio.com/"
        text=" Any developer who knows me would also know my general disatsifaction
          and loathing demeanor towards Microsoft products--VS Code is DEFINTELY
          the exception. I don't need a reason to be overly enthusiastic about
          the seemingly small things in life; my friend and mentor Raj will
          laugh as he tells you how excited I was to start using Atom once upon
          a time. How I would neverrrrrrrr not use Atom, then it was OMG
          WEBSTORM IS DA BEST. Now, and to stay (for the foreseeable future) is
          the greatest, lightest, most superior, bestest text editor slash
          pseudo IDE in the universe: Microsoft's VS Code."
      />
      <Tool
        title="React.JS"
        link="https://reactjs.org"
        text=" React.JS by Facebook's open source team is a declarative, JS framework
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
          water."
      />

      <Tool
        title="Styled-Components"
        link="https://www.styled-components.com/"
        text=" A friend of mine the other day asked if I still used styled-components
          and my response was Do I?! I'm not sure how we developed before
          anymore. Point is, I love my styled-components. A lightweight
          library, styled-components combines ES6 syntax with CSS and results in
          the ability for you to create reusable, style-encapsulated components
          that compile down to html tags."
      />
      <Tool
        title="Chart.JS"
        link="http://www.chartjs.org/"
        text="Contrary to D3's extensive API, Chart.JS provides an easy-to-understand, 
        fluid and lightweight data visualization API. We're currently using it throughout 
        our application. It comes out-of-the-box with animations, and props that make it easy 
        to display data. A simple AJAX call, a data model later, and bam!--you have charts! 
        Now, I understand there are certain complex cases where Chart.JS may not do the job 
        for you or your application, which is where D3 comes in. But if you're not requiring 
        much craziness, then what's the point?"
      />
      <Tool title="Cypress" />
      <StyledTitle3>Others</StyledTitle3>
      <Row style={{ flexWrap: 'wrap' }} margin="0 0 1em 0">
        {others.map(tool => {
          return (
            <A href={tool.link} target="_blank">
              <Text style={{ padding: '0 0 0 .6em', fontSize: '1.1em' }}>
                {tool.name}
              </Text>
            </A>
          )
        })}
      </Row>
      <Title2>Productivity</Title2>
      <Tool
        title="Bullet Journal"
        link="http://bulletjournal.com/"
        text=" I’m not quite sure how I got by before without my notebook — I think
          at one point, I thought it was silly and outdated for a 20-something
          year old to be taking notes on paper… especially when you’re in the
          tech industry; what a silly thought. I’ve now mastered my indexing
          system and have gone through several journal inserts, titled Meetings,
          Self-Growth, and Development (programming). Everywhere I go, so does
          my notebook — ready to capture some tip, interaction, or reflection
          that could be used to solve something later on."
      />
      <Tool
        title="ToDoist"
        link="https://en.todoist.com/"
        text="I've been using ToDoist for several months now, and to-date, I have completed 2,892 tasks. I even use it for menial tasks such as 'text so and so.'
        I have a goal to complete 10 tasks a day, and although I'm not always successful, my longest streak was 32 days!. I like ToDoist because of the day-to-day and week-by-week comparisons available."
      />
      <Tool
        title="Forest App"
        link="https://www.forestapp.cc/en/"
        text="I LOVE Forest App--it's a pomodoro clock approach, with fun little trees 
        you plant on the screen! Even better, when you collect so many points, you can plant 
        REAL trees. So back up, what's a pomodoro clock? It's a methodology of working in 
        25 minute intervals, with 5 minute breaks in between. Why is this effective? Because 
        work is more deliberate when you are allocating a small amount of time to a particular 
        task. I remember long back, I had a near 20 page proposal to complete--not a light 
        task--especially when it's a highly technical document. This may have normally taken 
        me a few days to complete--with the pomodoro method, I was able to complete the entire 
        thing start-to-finish in a matter of hours. Because 25 minutes is far less overwhelming 
        than looking at a complex task. I'm using it right now ;)"
      />
      <Tool
        title="Trello"
        link="https://trello.com/"
        text="I'm not overly in love with Trello, however, for small business management, 
        it serves its purpose. For development, we use Github projects for PM."
      />
      <Tool
        title="Airmail"
        link="http://airmailapp.com/features"
        text="Yes, I use a Macbook Pro, and one thing that Apple cannot seem to get right 
        is their mail client! Maybe they realize there isn't much of a market for paid email 
        clients, who knows. I've been using Airmail for about a year now, and it's cool--no complaints. 
        Nothing special except for the fact that I'm able to switch between my different emails pretty easily."
      />
    </Column>
  )
}

export default Tools
