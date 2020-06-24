//const { gql } = require('apollo-server-express');

const resolvers = {
    Query: {
        hello: () => 'Hello World',
    }
}

export default resolvers;