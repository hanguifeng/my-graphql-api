import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLObjectType,
} from 'graphql';

// import {
//   connectionArgs,
//   connectionDefinitions,
//   connectionFromArray,
//   cursorForObjectInConnection,
//   nodeDefinitions,
// } from 'graphql-relay';

import graphqlRelay from '../../graphqlRelay';

// const {
//   connectionType: UsersConnection,
//   edgeType: GraphQLUserEdge,
// } = connectionDefinitions({
//   name: 'User',
//   nodeType: User,
// });
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
    sex: {
      type: GraphQLString,
      resolve: async users => users.sex,
    },
    nickName: {
      type: GraphQLString,
      resolve: async users => users.nickName,
    },
    phoneNumber: {
      type: GraphQLString,
      resolve: async users => users.phoneNumber,
    },
    accountImage: {
      type: GraphQLString,
      resolve: async users => users.accountImage,
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
