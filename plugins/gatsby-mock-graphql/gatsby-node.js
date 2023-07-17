const { posts } = require("./data/posts");

exports.onPreInit = ({ actions, reporter }) => {
  reporter.info("Shall we begin to load the mocks?");
};

const resources = {
  wpResource: [
    {
      id: 1,
      title: "How to sell anythhing to anyone",
    },
  ],
};
exports.sourceNodes = async gatsbyApi => {
  const { actions, reporter, createNodeId, createContentDigest } = gatsbyApi;
  reporter.info("Creating nodes");

  const data = {
    ...posts,
    ...resources,
  };

  const dataCategories = Object.keys(data);

  dataCategories.forEach(dataCategory => {
    reporter.info("Fetching", dataCategory);

    const dataForCategory = data[dataCategory];

    dataForCategory.forEach(async item => {
      const node = {
        ...item,
        id: createNodeId(dataCategory + item.id),
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
