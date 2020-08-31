const { gql } = require("apollo-server");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const product = require("../../sequelize/controllers/product");

const typeDefs = gql`
  input ProductInput {
    name: String
    price: Int
    description: String
    store: String
    categoryId: Int!
    creatorId: Int!
    tagId: String
  }

  extend type Query {
    products: [Product]
  }

  extend type Mutation {
    createProduct(input: ProductInput): Product
    likeProduct(id: String): Int
  }

  type Product {
    id: Int
    name: String
    price: Int
    store: String
    description: String
    categoryId: Category
    creatorId: User
    tagId: Tag
    likes: Int
  }
`;

const resolvers = {
  Query: {
    products: async (parent, args, ctx, info) => {
      try {
        const result = await product.readAll();
        return result;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createProduct: async (parent, args, ctx, info) => {
      try {
        const result = await product.create(args.input);
        return result;
      } catch (error) {
        throw error;
      }
    },
    likeProduct: async (parent, args, ctx, info) => {
      try {
        const result = await product.addLike(args);
        return result;
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
