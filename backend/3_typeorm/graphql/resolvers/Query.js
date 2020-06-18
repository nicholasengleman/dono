const { gql } = require('apollo-server-express');

//resolvers
const resolvers = {
    Query: {
        hello: () => 'Hello World',
    }
}