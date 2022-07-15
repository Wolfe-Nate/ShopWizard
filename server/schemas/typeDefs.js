// imports
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  scalar DateTime

  type Item {
    _id: ID
    itemTitle: String
    itemSummary: String
    itemDescription: String
    itemStartDate: DateTime
    itemStatus: String
    itemAuthor: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
  }

  type User {
    _id: ID
    username: String
    email: String
    items: [Item]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    items(username: String): [Item]
    item(_id: ID!): Item
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addItem(
      itemTitle: String!
      itemSummary: String!
      itemDescription: String!
      itemStartDate: String!
      itemStatus: String!
    ): Item
    addComment(itemId: ID!, commentText: String!): Item
  }
`;

module.exports = typeDefs;
