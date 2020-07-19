const { gql } = require("apollo-server");

const typeDefs = gql`
  extend type Query {
    products: [Product]
  }
  type Product {
    id: ID
    categoryId: Int
    name: String
    price: Int
    store: String
    description: String
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
};

module.exports = { typeDefs, resolvers };
