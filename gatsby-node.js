const path = require("path");
const { copyLibFiles } = require("@builder.io/partytown/utils");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const BlogPost = path.resolve("./src/templates/stories/stories.jsx");

  const allStories = await graphql(`
    query {
      allWpPost {
        nodes {
          title
          slug
        }
      }
    }
  `);

  allStories.data.allWpPost.nodes.forEach(storyNode => {
    const { slug, title } = storyNode;
    createPage({
      path: `story/${slug}`,
      component: BlogPost,
      context: {
        slug,
      },
    });
  });
};

exports.onPreBuild = async () => {
  await copyLibFiles(path.join(__dirname, "static", "~partytown"));
};
