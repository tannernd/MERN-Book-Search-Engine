const { Book, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    getSingleUser: async (parent, {_id } ) => {
      const foundUser = await User.findOne({
        _id: _id
      });
  
      if (!foundUser) {
        return 'Cannot find a user with this id!';
      }  
      return foundUser;
    }
  },
  Mutation: {    
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { _id, body }) => {
      const saveBook = await User.findOneAndUpdate(
        { _id: _id },
        { $addToSet: { savedBooks: body } },
        { new: true }
      );
      return saveBook;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    deleteBook: async (parent, { _id, deleteId }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: _id },
        { $pull: { savedBooks: { bookId: deleteId } } },
        { new: true }
      );
      if (!updatedUser) {
        return "Couldn't find user with this id!";
      }
      return updatedUser;
    }
  },
};

module.exports = resolvers;
