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
