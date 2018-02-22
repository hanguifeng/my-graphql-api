import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { UserType } from './UserType';
import { UserDomain } from '../../domain';
import execSQLFactory from '../../helper';
import UserModel from '../../model/user';

const createUserMutation = mutationWithClientMutationId({
  name: 'createUser',
  inputFields: {
    nickName: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    phoneNumber: { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
    user: {
      type: UserType,
      resolve: user => user[0] && user[0].dataValues,
    },
  },
  mutateAndGetPayload: async ({ nickName, password, phoneNumber }) => {
    const querySQL = 'SELECT * FROM Users';
    const users = await execSQLFactory(querySQL, { model: UserModel });
    for (let i = 0; i < users.length; i += 1) {
      if (nickName === users[i].dataValues.nickName) {
        return {
          error: '昵称已存在',
        };
      }
      if (phoneNumber === users[i].dataValues.phoneNumber) {
        return {
          error: '手机号码已存在',
        };
      }
    }
    const user = await UserDomain.create({
      id: parseInt(100 * Math.random()),
      nickName,
      password,
      phoneNumber,
    });
    return user;
  },
});

export default createUserMutation;
