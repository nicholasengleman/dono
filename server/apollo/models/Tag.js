const { gql } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
  extend type Query {
    tags: [Tag]
    tag(name: String!): Tag
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
        console.log(args);
        const tags = await axios.get(`http://localhost:3000/tags`);
        const result = tags.data.filter((tag) => tag.name === args.name);
        return result[0];
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
