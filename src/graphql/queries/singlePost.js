import { gql } from "@apollo/client";

export const GET_POST = gql`
  query GET_POST($uri: String!) {
    postBy(uri: $uri) {
      id
      databaseId
      title
      content
      date
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          id
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      comments {
        nodes {
          id
          content
          author {
            node {
              name
              email
            }
          }
        }
      }
    }
  }
`;
