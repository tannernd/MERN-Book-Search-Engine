const typeDefs = `
  type Book {
    _id: ID!
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }
  
  input BookType {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    book: [Book]
    getSingleUser(_id: String): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(_id: String!, body: BookType): User
    deleteBook(_id: String!, deleteId: String!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
