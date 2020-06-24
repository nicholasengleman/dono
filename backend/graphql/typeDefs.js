const { gql } = require('apollo-server-express');

//schema 
const typeDefs = gql`
 type Query {
     hello: String
 }
`;

module.exports = { typeDefs }