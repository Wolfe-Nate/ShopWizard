import { gql } from "@apollo/client";

//not complete yet for this mutation
export const ADD_ITEM = gql`
  mutation AddItem(
    $itemName: String!
    $price: Int!
    $description: String!
    $category: String!
    $gameName: String!
  ) {
    addItem(
      itemName: $itemName
      price: $price
      description: $description
      category: $category
      gameName: $gameName
    ) {
      _id
      itemName
      price
      description
      category
      gameName
      createdAt
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        admin
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
