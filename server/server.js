const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Creating a new instance of Apollo server with GraphQL Schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddlware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `GraphQL server at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

//Calling the async Apollo server start function
startApolloServer(typeDefs, resolvers);
