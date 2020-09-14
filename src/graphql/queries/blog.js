import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query GET_POSTS($first: Int!) {
    posts(first: $first) {
      pageInfo {
        hasNextPage
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
