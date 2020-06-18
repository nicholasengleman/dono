const { gql } = require('apollo-server-express');

//schema 
const typeDefs = gql`
 type Query {
     hello: String
 }
`;

default export typeDefs;