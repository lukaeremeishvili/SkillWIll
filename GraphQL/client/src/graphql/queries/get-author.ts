import { gql } from "@apollo/client";

export const GET_AUTHOR = gql`
query Author($authorId: ID!) {
  author(id: $authorId) {
    id
    name
    verified
  }
}
`;
