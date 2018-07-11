module.exports = {
  pathPrefix: `/personal-site/`,
  siteMetadata: {
    title: 'William W. Whatley | Personal site & blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
  ],
}
