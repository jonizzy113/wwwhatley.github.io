import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Footer from '../components/footer'
import { Title1, Title2, Text, Column } from '../theme/index'
import cuid from 'cuid'

const StyledUl = styled.ul`
  display: flex;
  text-decoration: none;
  margin: 0.5em 0;
`

const StyledLi = styled.li`
  text-decoration: none;
  list-style: none;
  margin: 0 0.2em;
  font-family: 'Goudy Bookletter 1911', sans-serif;
`

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Column page>
      <Title1 margin="1em 0 0 0">Code. Learn. Write. Teach</Title1>
      {posts.map(({ node: post }) => {
        const { frontmatter } = post

        return (
          <Column margin="1.5em 0" key={cuid()}>
            <Title2 margin="0 0 .5em 0">
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </Title2>

            <Text color="#808080" margin="0">
              {frontmatter.date}
            </Text>
            {/* <StyledUl>
              {post.frontmatter.tags.map(tag => {
                return (
                  <StyledLi>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </StyledLi>
                )
              })}
            </StyledUl> */}
            <Text>{frontmatter.excerpt}</Text>
          </Column>
        )
      })}
      <Footer />
    </Column>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
