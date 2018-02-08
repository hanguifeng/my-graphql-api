import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLObjectType,
} from 'graphql';
import graphqlRelay from '../../graphqlRelay';

const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'User信息',
  fields: () => Object.assign({
    id: graphqlRelay.globalId,
    name: {
      type: GraphQLString,
      resolve: async users => users.name,
    },
    password: {
      type: GraphQLString,
      resolve: async users => users.password,
    },
  }),
});

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInputType',
  description: 'User payload definition',
  fields: () => ({
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

export {
  UserType,
  UserInputType,
};
export default 'dummy';
