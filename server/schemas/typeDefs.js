const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    coins: Int
    purchases: [Item]
    admin: Boolean
    createdAt: String
  }

  type Item {
    _id: ID
    itemName: String
    image: String
    price: Int
    category: [Category]
    gameName: Games
    comments: [Comment]
  }

  type Comment {
    commentText: String
    createdAt: String
    username: [User]
  }

  type Query {
    users: [User]
    items: [Item]
    comments: [Comment]
    user(id: ID!): User
    item(id: ID!): Item
    comment(id: ID!): Comment
  }
`;

module.exports = typeDefs;
