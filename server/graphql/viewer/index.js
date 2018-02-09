import { GraphQLObjectType } from 'graphql';
import graphqlRelay from '../../graphqlRelay';
import { UserType } from '../users/usersTypes';
import { CommodityType } from '../commodities/commoditiesTypes';
// import { getViewer } from '../../domain/viewer';
import execSQLFactory from '../../helper';
import UserModel from '../../model/user';
import CommoditiesModel from '../../model/commodity';

const Viewer = new GraphQLObjectType({
  name: 'Viewer',
  description: '根节点',
  fields: () => Object.assign({
    id: graphqlRelay.globalId,
    users: {
      type: UserType,
      resolve: async (viewer) => {
        console.log(viewer.users);
        const users = await viewer.users;
        return users[0].dataValues;
      },
    },
    commodities: {
      type: CommodityType,
      resolve: async (viewer) => {
        const commodities = await viewer.commodities;
        return commodities[0].dataValues;
      },
    },
  }),
});

const viewerQueries = {
  viewer: {
    type: Viewer,
    resolve: async () => {
      const querySQL = 'SELECT * FROM Users';
      const users = await execSQLFactory(querySQL, { model: UserModel });
      const querySQL1 = 'SELECT * FROM Commodities';
      const commodities = await execSQLFactory(querySQL1, { model: CommoditiesModel });
      return {
        users,
        commodities,
      };
    },
  },
};

export { viewerQueries };
export default 'dummy';
