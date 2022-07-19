import { gql } from "@apollo/client";

//not complete yet
export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      name
    }
  }
`;

export const QUERY_ALL_ITEMS = gql`
  query getItems {
    items {
      _id
      itemName
      image
      price
      description
      category
      gameName
      commentCount
    }
  }
`;

export const QUERY_SINGLE_ITEM = gql`
  query getSingleItem {
    item(_id: $id) {
      _id
      itemName
      price
      description
      category
      gameName
      createdAt
      comments {
        _id
        commentText
        createdAt
        username {
          _id
          username
        }
      }
      commentCount
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      coins
      items {
        _id
        itemName
        price
        description
        category
        gameName
      }
      itemsCount
      admin
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query userId {
    userId(_id: $id) {
      _id
      username
      coins
      items {
        _id
        itemName
        price
        description
        category
        gameName
      }
      itemsCount
      admin
    }
  }
`;
