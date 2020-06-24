"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-express');
const typeDefs = gql `
 type Query {
     hello: String
 }
`;
exports.default = typeDefs;
//# sourceMappingURL=typeDefs.js.map