import { gql } from "@apollo/client";

export const DELETE_GAME = gql`
mutation DelGame($deleteGameId: ID!) {
  deleteGame(id: $deleteGameId) {
    id
    title
    platform
  }
}
`