module.exports = {
  siteMetadata: {
    title: `Mediação`,
    description: `Site da Equipe Mediação. Aracaju-SE. Psicologia Infantil. ABA.`,
    author: `@teufel8`,
    siteUrl: `https://www.equipemediacao.com.br/`,
    image: `/mediacao.jpeg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mediação`,
        short_name: `mediação`,
        start_url: `/`,
        background_color: `#800080`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#800080`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
