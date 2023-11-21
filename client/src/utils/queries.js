import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetSingleUser($username: String) {
  getSingleUser(username: $username) {
    _id
    username
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;


