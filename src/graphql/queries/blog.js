import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  {
    posts {
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
