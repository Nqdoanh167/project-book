/** @format */
const resolvers = {
   // QUERY
   Query: {
      books: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.getAllBooks(),
      book: async (parent, {_id}, {mongoDataMethods}) => await mongoDataMethods.getBookById(_id),

      authors: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.getAllAuthors(),
      author: async (parent, {_id}, {mongoDataMethods}) => await mongoDataMethods.getAuthorById(_id),
   },

   Book: {
      author: async ({authorId}, args, {mongoDataMethods}) => await mongoDataMethods.getAuthorById(authorId),
   },

   Author: {
      books: async ({_id}, args, {mongoDataMethods}) => await mongoDataMethods.getAllBooks({authorId: _id}),
   },

   // MUTATION
   Mutation: {
      createAuthor: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.createAuthor(args),
      createBook: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.createBook(args),
   },
};

module.exports = resolvers;
