const { gql } = require('apollo-server');
const axios = require("axios");

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
    products: async (parent, args, ctx, info) => {
      try {
        const products = await axios.get("http://localhost:3000/products");
        return products.data;
      } catch (error) {
        throw error;
      }
    }
  },
  Category: {
    creator: async (parent, args, ctx, info) => {
      try {
        const categories = await axios.get("http://localhost:3000/categories");
        return categories.data.filter(category => {
          return category.creatorID === parent.id;
        }) 
        } catch (error) {
          throw error;
      }
    }
  },
  User: {
    categories: async (parent, args, ctx, info) => {
      try {
        const categories = await axios.get("http://localhost:3000/categories");
        return categories.data.filter(category => {
          return category.creatorID === parent.id;
        }) 
        } catch (error) {
          throw error;
      }
    },
    products: async (parent, args, ctx, info) => {
      console.log(args);
      try {
        const products = await axios.get("http://localhost:3000/products");
        return products.data.filter(product => {
          return product.userId === parent.id;
        }) 
        } catch (error) {
          throw error;
      }
    }
  }
}

exports.resolvers = resolvers;


