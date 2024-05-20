/** @format */

const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const mongoose = require('mongoose');

// Load schema & resolvers
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');
// Load db methods
const mongoDataMethods = require('./data/db');
// Connect to MongoDB
const connectDB = async () => {
   try {
      await mongoose.connect('mongodb://localhost:27017/graphql');
      console.log('MongoDB connected');
   } catch (error) {
      console.log(error.message);
      process.exit(1);
   }
};

connectDB();
const app = express();
let apolloServer = null;
async function startServer() {
   apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      context: () => ({mongoDataMethods}),
   });
   await apolloServer.start();
   apolloServer.applyMiddleware({app});
}
startServer();

app.listen({port: 4000}, () => console.log(`Server ready at http://localhost:4000${apolloServer.graphqlPath}`));
