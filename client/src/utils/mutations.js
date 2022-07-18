import { gql } from "@apollo/client";

//not complete yet for this mutation
export const ADD_USER = gql`
  mutation addUser($name: String!) {
    addProfile(name: $name) {
      _id
      name
    }
  }
`;

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
