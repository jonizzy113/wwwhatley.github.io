import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Column>
      {posts.map(({ node: post }) => {
        const { frontmatter } = post

        return (
          <div>
            <h2 style={{ color: '#fff' }}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </h2>
            <p>{frontmatter.date}</p>
            <p>{frontmatter.excerpt}</p>
            <ul>
              {post.frontmatter.tags.map(tag => {
                return (
                  <li>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
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
