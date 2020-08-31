const { gql } = require("apollo-server");
const axios = require("axios");
const category = require("../../sequelize/controllers/category");

const typeDefs = gql`
  input CategoryInput {
    name: String
    creatorId: Int!
  }

  extend type Query {
    categories: [Category]
  }

  extend type Mutation {
    createCategory(input: CategoryInput): Category
  }

  type Category {
    id: Int
    name: String
    creator: User
    products: [Product]
  }
`;

const resolvers = {
  Query: {
    categories: async (parent, args, ctx, info) => {
      try {
        const categories = await category.readAll();
        return categories;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createCategory: async (parent, args, ctx, info) => {
      try {
        const result = await category.create(args.input);
        return result;
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
