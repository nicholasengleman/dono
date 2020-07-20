const { merge } = require("lodash");
const { gql, makeExecutableSchema } = require("apollo-server");

const { typeDefs: User, resolvers: userResolvers } = require("./models/User");
const { typeDefs: Category, resolvers: categoryResolvers } = require("./models/Category");
const { typeDefs: Product, resolvers: productResolvers } = require("./models/Product");

const Query = gql`
  type Query {
    _empty: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [Query, User, Category, Product],
  resolvers: merge(userResolvers, categoryResolvers, productResolvers),
});

module.exports = { schema };
