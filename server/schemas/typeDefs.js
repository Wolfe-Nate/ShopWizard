// imports
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  scalar DateTime

  type Item {
    _id: ID
    itemName: String
    price: Int
    description: String
    category: String
    gameName: String
    // itemStatus: String
    // itemAuthor: String
    createdAt: String
    comments: [Comment]
    commentCount: Int
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: User
  }

  type User {
    _id: ID
    username: String
    email: String
    coins: Int
    items: [Item]
    comments: [Comment]
    commentCount: Int
    admin: Boolean
    createdAt: String
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
      itemName: String!
      itemImage: String!
      description: String!
      category: String!
      gameName: String!
    ): Item
    addComment(itemId: ID!, commentText: String!): Item
  }
`;

module.exports = typeDefs;
