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
    // email: {
    //   type: new GraphQLNonNull(GraphQLString),
    // },
    name: {
      type: GraphQLString,
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
