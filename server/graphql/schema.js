import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import { viewerQueries } from './viewer';
import {
  createToken,
  createUser,
} from './users';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...viewerQueries,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      createToken,
      createUser,
    }),
  }),
});
