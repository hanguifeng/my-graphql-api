import {
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import { random } from 'faker';
import isEmail from 'validator/lib/isEmail';
import execSQLFactory from '../../helper';
import UserModel from '../../model/user';

import {
  UserType,
  UserInputType,
} from './usersTypes';

const userQueries = {
  users: {
    type: new GraphQLList(UserType),
    resolve: async () => {
      const querySQL = 'SELECT id, name, password, accountImage, sex, nickName, phoneNumber FROM Users';
      const users = await execSQLFactory(querySQL, { model: UserModel });
      return users;
    },
  },
};

const userMutations = {
  createUser: {
    type: UserType,
    args: {
      input: {
        type: new GraphQLNonNull(UserInputType),
      },
    },
    resolve: async (rootValue, { input }) => {
      if (!isEmail(input.email)) {
        throw new Error('Email is not in valid format');
      }
      const result = await new Promise((resolve) => {
        setTimeout(() =>
          resolve(Object.assign(input, {
            id: random.uuid(),
          })), 100);
      });
      return result;
    },
  },
};

export {
  userQueries,
  userMutations,
};
