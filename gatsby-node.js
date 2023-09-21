const path = require("path");
const { copyLibFiles } = require("@builder.io/partytown/utils");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const BlogPost = path.resolve("./src/templates/stories/stories.jsx");

  const allPosts = await fetch(
    `${process.env.WORDPRESS_BASE_URL}/wp/v2/posts?_embed=1`
  );
  const allStories = await allPosts.json();

  allStories.forEach(storyNode => {
    const { slug, title } = storyNode;
    createPage({
      path: `story/${slug}`,
      component: BlogPost,
      context: {
        story: storyNode,
      },
    });
  });

  /* We should bring this back in the future */

  // const SingleResourcePage = path.resolve(
  //   "./src/templates/resources/single.jsx"
  // );
  // const allWpCategories = await graphql(`
  //   query {
  //     allWpCategory {
  //       nodes {
  //         name
  //         slug
  //         resources {
  //           nodes {
  //             title
  //             url
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  //   const resourceCategories =
  //     await allWpCategories.data.allWpCategory.nodes.filter(
  //       category => category.resources.nodes.length > 0
  //     );

  //   resourceCategories.forEach(categoryNode => {
  //     const { slug } = categoryNode;
  //     createPage({
  //       path: `resources/${slug}`,
  //       component: SingleResourcePage,
  //       context: {
  //         slug,
  //       },
  //     });
  //   });
};

exports.onPreBuild = async () => {
  await copyLibFiles(path.join(__dirname, "static", "~partytown"));
};
