import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';
import * as graphqlRelay from 'graphql-relay';

const globalId = {
  type: new GraphQLNonNull(GraphQLID),
  resolve: obj => graphqlRelay.toGlobalId(obj.type, obj.id),
};

export default Object.assign({}, graphqlRelay, {
  globalId,
});
