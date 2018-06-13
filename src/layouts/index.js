import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import './index.css'
import Nav from '../components/nav'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #2e3940;
`

const StyledColumn = styled.div`
  width: calc(100% - 300px);
`

const Layout = ({ children, data }) => (
  <Wrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Nav />
    <StyledColumn>{children()}</StyledColumn>
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
