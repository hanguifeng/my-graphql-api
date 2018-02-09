import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import { viewerQueries } from './viewer';
// import { commoditiesQueries } from './commodities/commodities';
import {
  // userQueries,
  userMutations,
} from './users/users';

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
      ...userMutations,
    }),
  }),
});
