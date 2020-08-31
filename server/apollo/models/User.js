const { gql } = require("apollo-server");
const axios = require("axios");
const user = require("../../sequelize/controllers/user");

const typeDefs = gql`
  input UserInput {
    name: String
    password: String
  }
  extend type Query {
    users: [User]
    user(id: Int!): User
  }
  extend type Mutation {
    createUser(input: UserInput): User
  }
  type User {
    id: Int
    name: String
    categories: [Category]
  }
`;

const resolvers = {
  Query: {
    users: async (parent, args, ctx, info) => {
      try {
        const users = await user.readAll();
        return users;
      } catch (error) {
        throw error;
      }
    },
    user: async (parent, args, ctx, info) => {
      try {
        const user = await user.read(args);
        return user;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createUser: async (parent, args, ctx, info) => {
      try {
        const result = await user.create(args.input);
        return result;
      } catch (error) {
        throw error;
      }
    },
  },
  User: {
    categories: async (parent, args, ctx, info) => {
      try {
        const categories = await axios.get("http://localhost:3000/categories");
        return categories.data.filter((category) => {
          return category.creatorID === parent.id;
        });
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
