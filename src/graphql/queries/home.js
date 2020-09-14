import { gql } from "@apollo/client";

export const GET_HOME = gql`
  query GET_HOME($first: Int!, $uri: ID!) {
    posts(first: $first) {
      edges {
        node {
          id
          uri
          title
          date
        }
      }
    }
    page(id: $uri, idType: URI) {
      title
      content
    }
  }
`;
