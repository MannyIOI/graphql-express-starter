import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import api from "./api";
// import checkJwt from "./middleware/checkJwt";
import Knex from "knex";

const env = process.env.NODE_ENV || "development";

const connection = require("../knexfile");
const { Model } = require("objection");

const knexConnection = Knex(connection[env]);
Model.knex(knexConnection);

require("dotenv").config();

const app: express.Application = express();

const path = "/graphql";

app.use(cors());
app.use(express.json());

const server = new ApolloServer(api);

// TODO: this is for testing and should be moved to after auth
server.applyMiddleware({ app, path: path });

// app.use((req, res, next) => checkJwt(req, res, next));

app.listen(process.env.PORT, () => {
  console.log(
    `the server is running at http://localhost:${process.env.PORT}/graphql`
  );
});
