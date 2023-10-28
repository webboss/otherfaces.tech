require("dotenv").config();

const path = require("path");

const IS_MOCK_ENABLED = process.env.GATSBY_ENABLE_MOCKS === "true";

const NO_OF_WORDPRESS_ITEMS = Number(process.env.NO_OF_WORDPRESS_ITEMS);

module.exports = {
  siteMetadata: {
    title: `Other Faces of Tech`,
    description: `Stories and roadmaps to non-coding careers in tech`,
    author: `@webboss`,
  },

  // Kindly edit the manifest file details below also
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    IS_MOCK_ENABLED && `gatsby-mock-graphql`,
    !IS_MOCK_ENABLED && {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WORDPRESS_SOURCE_URL,
        schema: {
          timeout: 120000,
        },
        type: {
          ...(NO_OF_WORDPRESS_ITEMS && {
            __all: {
              limit:
                process.env.NODE_ENV === "production"
                  ? 10000
                  : NO_OF_WORDPRESS_ITEMS,
            },
          }),
        },
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
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
        mocks: path.join(__dirname, "src/mocks"),
        jpegs: path.join(__dirname, "src/assets/images/jpegs"),
        templates: path.join(__dirname, "src/templates"),
        illustrations: path.join(__dirname, "src/assets/images/illustrations"),
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ].filter(Boolean),
};
