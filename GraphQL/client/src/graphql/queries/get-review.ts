import { gql } from "@apollo/client";

export const GET_REVIEW = gql`
query Review($reviewId: ID!) {
  review(id: $reviewId) {
    id
    content
    rating
    author {
      name
    }
    game {
      title
    }
  }
}
`;
