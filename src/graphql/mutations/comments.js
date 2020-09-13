import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation CREATE_COMMENT($input: CreateCommentInput!) {
    createComment(input: $input) {
      comment {
        id
        content
        author {
          node {
            name
          }
        }
      }
    }
  }
`;
