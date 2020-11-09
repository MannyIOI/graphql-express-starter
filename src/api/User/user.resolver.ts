import { context } from "../utils/models";

const createUser = async (_, args, { model }: context) => {
  return model.User.query().insertAndFetch(args.data);
};

const editUser = async (_, args, { req, model }: context) => {
  return model.User.query().updateAndFetchById(req.req.user_id, args.data);
};

const getAllUsers = async (_, args, { model }: context) => {
  return model.User.query();
};

const getUser = async (_, args, { model }: context) => {
  return model.User.query().findById(args.id);
};

export default {
  Query: {
    getAllUsers,
    getUser,
  },
  Mutation: {
    createUser,
    editUser,
  },
};
