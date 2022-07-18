import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
    # create a GraphQL query to be executed by Apollo Client
    query Itemdata {
        item {
            itemName
            image
            price
            description
            category
            gameName
        }
    }
`;
