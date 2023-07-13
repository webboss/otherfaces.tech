const { categories } = require("./data/categories");
const { posts } = require("./data/posts");
const { resources } = require("./data/resources");

exports.onPreInit = ({ actions, reporter }) => {
  reporter.info("Shall we begin to load the mocks?");
};

exports.sourceNodes = async gatsbyApi => {
  const { actions, reporter, createNodeId, createContentDigest } = gatsbyApi;
  reporter.info("Creating nodes..");

  const data = {
    ...posts,
    ...resources,
    ...categories,
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

  reporter.success("Nodes created🎉");
};
