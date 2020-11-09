import { User } from "../User/user.model";
import { ModelClass, Model } from "objection";

export const model = {
  User,
};

export type context = {
  req: any;
  model: {
    User: ModelClass<Model>;
  };
};
