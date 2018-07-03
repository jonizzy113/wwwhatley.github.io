import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Title1, Title3, Text, Column, Row } from '../theme/index'

const Template = ({ data, location, pathContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter
  const { next, prev } = pathContext
  return (
    <Column padding="1em 2em" width="85%">
      <Helmet title={`${frontmatter.title} - My Blog`} />

      <div>
        <Title1>{title}</Title1>
        <Title3>{date}</Title3>

        <div
          className="blogPostTemplate"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <Text>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous: {prev.frontmatter.title}
            </Link>
          )}
        </Text>
        {/* <Text>
          {next && (
            <Link to={next.frontmatter.path}>
              Next: {next.frontmatter.title}
            </Link>
          )}
        </Text> */}
      </div>
    </Column>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`

export default Template
