import { gql } from "@apollo/client";

export const GET_PAGE = gql`
  query GET_PAGE_BY_URI($uri: ID!) {
    page(id: $uri, idType: URI) {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;
