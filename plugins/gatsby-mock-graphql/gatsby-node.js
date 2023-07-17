const { categories } = require("./data/categories");
const { posts } = require("./data/posts");
const { resources } = require("./data/resources");
const { teamMembers } = require("./data/teamMembers");

exports.onPreInit = async ({ actions, reporter }) => {
  reporter.info("Mock Enabled 👀");
};

exports.sourceNodes = async gatsbyApi => {
  const { actions, reporter, createNodeId, createContentDigest } = gatsbyApi;

  reporter.info("Creating nodes..");

  const categoriesWithResources = categories.wpCategory.map(category => {
    const resourcesPerCategory = resources.wpResource.filter(resource => {
      return resource.categories.nodes.some(
        resourceCategory => resourceCategory.name === category.name
      );
    });

    const theCategory = category;

    return {
      ...theCategory,
      resources: {
        nodes: resourcesPerCategory,
      },
    };
  });

  const data = {
    ...posts,
    ...resources,
    ...teamMembers,
    wpCategory: categoriesWithResources,
  };

  const dataCategories = Object.keys(data);

  dataCategories.forEach(dataCategory => {
    reporter.info(`Fetching ${dataCategory}`);

    const dataForCategory = data[dataCategory];

    dataForCategory.forEach(async (item, index) => {
      const node = {
        ...item,
        id: createNodeId(dataCategory + index),
        internal: {
          type: dataCategory,
          contentDigest: createContentDigest(data),
        },
      };

      await actions.createNode(node);
    });
  });

  reporter.success("Mock Nodes created🎉");
};
