import { makeExecutableSchema } from "graphql-tools";
import { importSchema } from "graphql-import";
import { model } from "./utils/models";

import user from "./User/user.resolver";

const resolvers = {
  Query: {
    ...user.Query,
  },
  Mutation: {
    ...user.Mutation,
  },
};

const typeDefs = importSchema(`${__dirname}/schema.graphql`);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default {
  schema,
  context: (req) => {
    return {
      req,
      model,
    };
  },
};
