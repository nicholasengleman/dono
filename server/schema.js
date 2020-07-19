const { merge } = require("lodash");
const { gql, makeExecutableSchema } = require("apollo-server");

const { typeDefs: User, resolvers: userResolvers } = require("./endpoints/User");
const { typeDefs: Category, resolvers: categoryResolvers } = require("./endpoints/Category");
const { typeDefs: Product, resolvers: productResolvers } = require("./endpoints/Product");

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
