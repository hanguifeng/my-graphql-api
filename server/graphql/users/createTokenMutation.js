import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { UserType } from './UserType';
import { UserDomain } from '../../domain';

const createTokenMutation = mutationWithClientMutationId({
  name: 'createToken',
  inputFields: {
    nickName: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    password: { type: new GraphQLNonNull(GraphQLString) },
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
  mutateAndGetPayload: async ({ nickName, phoneNumber, password }) => {
    const user = await UserDomain.findOneByPassword({
      where: {
        nickName,
        phoneNumber,
      },
    });
    const userPassword = user[0] && user[0].dataValues.password;
    if (!user) {
      return {
        error: '账号不存在',
      };
    }
    if (password !== userPassword) {
      return {
        error: '密码不正确',
      };
    }
    return user;
  },
});

export default createTokenMutation;
