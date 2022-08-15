const path = require("path");
const { slash } = require("gatsby-core-utils");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  //query to get all blog posts

  const {
    data: {
      allWpPost: { nodes: allPosts },
    },
  } = await graphql(`
    query {
      allWpPost {
        nodes {
          slug
        }
      }
    }
  `);

  //   const BlogPost = path.resolve(
  //     "./src/templates/blog/blogposts/single/single-post.jsx"
  //   );

  allPosts.forEach(node => {
    console.log(node);
    // createPage({
    //   path: `blog/${node.slug}`,
    //   component: BlogPost,
    //   context: {
    //     slug: node.slug,
    //   },
    // });
  });
};
