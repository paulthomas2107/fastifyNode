const { getItems, getItem } = require("../controllers/itemController");

// Item Schema
const item = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    name: {
      type: "string",
    },
  },
};

// Options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: item,
      },
    },
  },
  handler: getItems,
};

const getItemOpts = {
  schema: {
    response: {
      200: item,
    },
  },
  handler: getItem,
};

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get("/items", getItemsOpts);
  // Get one item
  fastify.get("/items/:id", getItemOpts);

  done();
}

module.exports = itemRoutes;
