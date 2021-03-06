const {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
} = require("../controllers/itemController");

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

const postItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    },
    response: {
      201: item,
    },
  },
  handler: addItem,
};

const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: deleteItem,
};

const updateItemOpts = {
  schema: {
    response: {
      200: item,
    },
  },
  handler: updateItem,
};

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get("/items", getItemsOpts);
  // Get one item
  fastify.get("/items/:id", getItemOpts);
  // Add item
  fastify.post("/items", postItemOpts);
  // Delete item
  fastify.delete("/items/:id", deleteItemOpts);
  // Update item
  fastify.put("/items/:id", updateItemOpts);

  done();
}

module.exports = itemRoutes;
