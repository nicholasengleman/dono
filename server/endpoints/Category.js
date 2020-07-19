const { gql } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
  extend type Query {
    categories: [Category]
  }
  type Category {
    id: ID
    categoryName: String
    creator: User
    products: [Product]
  }
`;

const resolvers = {
  Query: {
    categories: async (parent, args, ctx, info) => {
      try {
        const categories = await axios.get("http://localhost:3000/categories");
        return categories.data;
      } catch (error) {
        throw error;
      }
    },
  },
  Category: {
    creator: async (parent, args, ctx, info) => {
      try {
        const categories = await axios.get("http://localhost:3000/categories");
        return categories.data.filter((category) => {
          return category.creatorID === parent.id;
        });
      } catch (error) {
        throw error;
      }
    },
    products: async (parent, args, ctx, info) => {
      try {
        const products = await axios.get("http://localhost:3000/products");
        return products.data.filter((product) => {
          return product.categoryId === parent.id;
        });
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
