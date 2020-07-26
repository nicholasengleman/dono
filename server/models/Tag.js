const { gql } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
  extend type Query {
    tags: [Tag]
    tag(id: String!): Tag
  }

  type Tag {
    id: String
    name: String
    products: [Product]
  }
`;

const resolvers = {
  Query: {
    tags: async (parent, args, ctx, info) => {
      try {
        const tags = await axios.get("http://localhost:3000/tags");
        return tags.data;
      } catch (error) {
        throw error;
      }
    },
    tag: async (parent, args, ctx, info) => {
      try {
        const tag = await axios.get(`http://localhost:3000/tags/${args.id}`);
        return tag.data;
      } catch (error) {
        throw error;
      }
    },
  },

  Tag: {
    products: async (parent, args, ctx, info) => {
      try {
        const products = await axios.get("http://localhost:3000/products");
        return products.data.filter((product) => {
          return product.tagId === parent.id;
        });
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
