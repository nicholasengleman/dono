const { gql } = require('apollo-server-express');
import { db } from "./../db/demo_db";


const resolvers = {
    Query: {
        hello: () => 'Hello World',
    }
}

module.exports = { resolvers }