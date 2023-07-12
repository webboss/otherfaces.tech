exports.onPreInit = ({ actions, reporter }) => {
  reporter.info("Shall we begin to load the mocks?");
};

exports.sourceNodes = async gatsbyApi => {
  const { actions, reporter, createNodeId, createContentDigest } = gatsbyApi;
  reporter.info("Plugin Nodess");

  const node = {
    hello: "world",
    id: createNodeId("helloWorld"),
    internal: {
      type: "HelloWorldBeeches",
      contentDigest: createContentDigest({ hello: "world" }),
    },
  };

  await actions.createNode(node);

  reporter.success("Nodes created");
};
