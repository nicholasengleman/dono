const { gql } = require("apollo-server");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

const typeDefs = gql`
  extend type Query {
    products: [Product]
  }

  extend type Mutation {
    addProduct(name: String, price: Int, description: String, store: String, categoryId: Int, userId: Int): String
  }

  type Product {
    id: String
    name: String
    price: Int
    store: String
    description: String
    categoryId: Int
    creator: User
  }
`;

const resolvers = {
  Query: {
    products: async (parent, args, ctx, info) => {
      try {
        const products = await axios.get("http://localhost:3000/products");
        return products.data;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    addProduct: async (parent, { categoryId, userId, name, price, description, store }, ctx, info) => {
      try {
        const result = await axios.post("http://localhost:3000/products", {
          id: uuidv4(),
          categoryId,
          userId,
          name,
          price,
          description,
          store,
        });
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
