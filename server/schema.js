const { merge } = require("lodash");
const { gql, makeExecutableSchema } = require("apollo-server");

const { typeDefs: User, resolvers: userResolvers } = require("./models/User");
const { typeDefs: Category, resolvers: categoryResolvers } = require("./models/Category");
const { typeDefs: Product, resolvers: productResolvers } = require("./models/Product");
const { typeDefs: Tag, resolvers: tagResolvers } = require("./models/Tag");

const Query = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [Query, User, Category, Product, Tag],
  resolvers: merge(userResolvers, categoryResolvers, productResolvers, tagResolvers),
});

module.exports = { schema };
