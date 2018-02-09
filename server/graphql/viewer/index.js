import { GraphQLObjectType } from 'graphql';
import graphqlRelay from '../../graphqlRelay';
import { UsersType } from '../users/usersTypes';
import { CommodityType } from '../commodities/commoditiesTypes';
import { getViewer } from '../../domain/viewer';

const Viewer = new GraphQLObjectType({
  name: 'Viewer',
  description: '根节点',
  fields: () => Object.assign({
    id: graphqlRelay.globalId,
    users: {
      type: UsersType,
      resolve: viewer => viewer.users,
    },
    commodities: {
      type: CommodityType,
      resolve: viewer => viewer.commodities,
    },
  }),
});

const viewerQueries = {
  viewer: {
    type: Viewer,
    resolve: () => getViewer(),
  },
};

export { viewerQueries };
export default 'dummy';
