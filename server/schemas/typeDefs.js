// imports
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  scalar DateTime

  type Item {
    _id: ID
    itemName: String
    image: String
    price: Int
    description: String
    category: String
    gameName: String
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
    coins: Int
    items: [Item]
    itemsCount: Int
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
    userId(_id: ID!): User
    comments: [Comment]
    comment(_id: ID!): Comment
    items: [Item]
    item(_id: ID!): Item
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    addItem(
      itemName: String!
      price: Int!
      description: String!
      category: String!
      gameName: String!
    ): Item
    addComment(itemId: ID!, commentText: String!): Item
  }
`;

// removed user(username: String!): User & userItems(username: String!): [Item] because I don't think we'll need these

module.exports = typeDefs;
