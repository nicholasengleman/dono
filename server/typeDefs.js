const { gql } = require('apollo-server');

const typeDefs = gql`
  type Category {
    id: ID
    categoryName: String
    creator: User!
  }

  type Product {
    id: ID
    categoryId: Int
    name: String
    price: Int
    store: String
    description: String
    creator: User!
  }

  type User {
    id: ID
    name: String
    categories: [Category]
    products: [Product]
  }

  type Query {
    categories: [Category]
    products: [Product]
    users: [User]
    user(id: Int!): User
  }
`;

exports.typeDefs = typeDefs;
