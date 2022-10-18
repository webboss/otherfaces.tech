require("dotenv").config();

const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Other Faces of Tech`,
    description: `A tech advocacy series where people who aren’t web/software developers are interviewed and their stories told.`,
    author: `@webboss`,
  },

  // Kindly edit the manifest file details below also
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WORDPRESS_SOURCE_URL,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `otherfaces.tech`,
        short_name: `otherfaces.tech`,
        start_url: `https://otherfaces.tech`,
        //Dominant color of the brand
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        svgs: path.join(__dirname, "src/assets/images/svgs"),
        config: path.join(__dirname, "src/config"),
        utils: path.join(__dirname, "src/utils"),
        jpegs: path.join(__dirname, "src/assets/images/jpegs"),
        templates: path.join(__dirname, "src/templates"),
        illustrations: path.join(__dirname, "src/assets/images/illustrations"),
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
