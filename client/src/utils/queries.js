import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetSingleUser($id: String) {
  getSingleUser(_id: $id) {
    _id
    username
    savedBooks {
      _id
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


