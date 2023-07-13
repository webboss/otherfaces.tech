const { categories } = require("./data/categories");
const { posts } = require("./data/posts");
const { resources } = require("./data/resources");
const { teamMembers } = require("./data/teamMembers");

exports.onPreInit = ({ actions, reporter }) => {
  reporter.info("Shall we begin to load the mocks?");
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

    return {
      ...category,
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
  // ...categories,

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

  reporter.success("Nodes created🎉");
};
