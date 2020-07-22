const { gql } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
  extend type Query {
    users: [User]
    user(id: Int!): User
  }
  type User {
    id: ID
    name: String
    categories: [Category]
  }
`;

const resolvers = {
  Query: {
    users: async (parent, args, ctx, info) => {
      try {
        const users = await axios.get("http://localhost:3000/users");
        return users.data;
      } catch (error) {
        throw error;
      }
    },
    user: async (parent, args, ctx, info) => {
      try {
        const user = await axios.get(`http://localhost:3000/users/${args.id}`);
        return user.data;
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
