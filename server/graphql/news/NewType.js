import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInt,
} from 'graphql';
import {
  connectionDefinitions,
  globalIdField,
} from 'graphql-relay';

const NewType = new GraphQLObjectType({
  name: 'NewType',
  description: 'New信息',
  fields: () => Object.assign({
    id: globalIdField('NewType'),
    time: {
      type: GraphQLString,
      resolve: async news => news.time,
    },
    title: {
      type: GraphQLString,
      resolve: async news => news.title,
    },
    url: {
      type: GraphQLString,
      resolve: async news => news.url,
    },
    acount: {
      type: GraphQLInt,
      resolve: async news => news.length,
    },
  }),
});

export const {
  connectionType: NewsConnection,
} = connectionDefinitions({
  name: 'NewType',
  nodeType: NewType,
});

export { NewType };
export default 'dummy';
