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
