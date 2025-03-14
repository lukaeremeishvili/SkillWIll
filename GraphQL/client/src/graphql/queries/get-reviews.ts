import { gql } from "@apollo/client";

export const GET_REVIEWS = gql`
    query GetReviews {
        reviews {
            id
            rating
            content
            author {
                name
            }
            game {
                title
            }
        }
    }
`;
