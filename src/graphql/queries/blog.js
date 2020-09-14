import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query GET_POSTS($first: Int, $last: Int, $after: String, $before: String) {
    posts(first: $first, last: $last, after: $after, before: $before) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          id
          uri
          title
          date
          categories {
            nodes {
              id
              name
            }
          }
        }
      }
    }
  }
`;
