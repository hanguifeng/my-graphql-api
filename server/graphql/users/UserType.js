import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType,
  GraphQLObjectType,
} from 'graphql';
import {
  connectionDefinitions,
  globalIdField,
} from 'graphql-relay';

export const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'User信息',
  fields: () => Object.assign({
    id: globalIdField('UserType'),
    name: {
      type: GraphQLString,
      resolve: async user => user.name,
    },
    password: {
      type: GraphQLString,
      resolve: async user => user.password,
    },
    sex: {
      type: GraphQLString,
      resolve: async user => user.sex,
    },
    nickName: {
      type: GraphQLString,
      resolve: async user => user.nickName,
    },
    phoneNumber: {
      type: GraphQLString,
      resolve: async user => user.phoneNumber,
    },
    accountImage: {
      type: GraphQLString,
      resolve: async user => user.accountImage,
    },
  }),
});

export const {
  connectionType: UsersConnection,
} = connectionDefinitions({
  name: 'UserType',
  nodeType: UserType,
});

export default 'dummy';
