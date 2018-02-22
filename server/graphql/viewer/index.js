import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import {
  connectionArgs,
  connectionFromPromisedArray,
  globalIdField,
} from 'graphql-relay';
import { UsersConnection } from '../users';
import { CommoditiesConnection } from '../commodities';
import { NewsConnection } from '../news';
import execSQLFactory from '../../helper';
import { UserModel, CommoditiesModel, NewModel } from '../../model';
import { CommodityDomain, NewsDomain } from '../../domain';
import newsSpider from '../../newsSpider';
// import { nodeInterface } from '../../relay';
// newsSpider();
const Viewer = new GraphQLObjectType({
  name: 'Viewer',
  description: '根节点',
  fields: () => Object.assign({
    id: globalIdField('Viewer'),
    users: {
      type: UsersConnection,
      args: connectionArgs,
      resolve: (viewer, args) => connectionFromPromisedArray(
        (async () => {
          const users = await viewer.users;
          return users;
        })(), args),
    },
    commodities: {
      type: CommoditiesConnection,
      args: {
        category: {
          type: GraphQLString,
        },
        from: {
          type: GraphQLInt,
        },
        ...connectionArgs,
      },
      resolve: (viewer, { category, from, ...args }) => connectionFromPromisedArray(
        (async () => {
          const commodities = viewer.commodities;
          if (from && !category) {
            const commoditiesByFrom = await CommodityDomain.getFromData(commodities, from);
            return commoditiesByFrom;
          } else if (category && !from) {
            const commoditiesByCategory =
              await CommodityDomain.findCommoditiesByCategory(viewer.commodities, category);
            return commoditiesByCategory;
          } else if (category && from) {
            const commoditiesByCategory =
              await CommodityDomain.findCommoditiesByCategory(commodities, category);
            const commoditiesByFrom =
              await CommodityDomain.getFromData(commoditiesByCategory, from);
            return commoditiesByFrom;
          }
          return commodities;
        })(), args),
    },
    news: {
      type: NewsConnection,
      args: {
        from: {
          type: GraphQLInt,
        },
        ...connectionArgs,
      },
      resolve: (viewer, { from, ...args }) => connectionFromPromisedArray(
        (async () => {
          const news =
            await NewsDomain.getFromData(viewer.news, from);
          return news;
        })(), args),
    },
  }),
  // interfaces: [nodeInterface],
});

const viewerQueries = {
  viewer: {
    type: Viewer,
    resolve: async () => {
      const querySQL = 'SELECT * FROM Users';
      const users = await execSQLFactory(querySQL, { model: UserModel });
      const querySQL1 = 'SELECT * FROM Commodities';
      const commodities = await execSQLFactory(querySQL1, { model: CommoditiesModel });
      const querySQL2 = 'SELECT * FROM News';
      const news = await execSQLFactory(querySQL2, { model: NewModel });
      return {
        users,
        commodities,
        news,
      };
    },
  },
};

export { viewerQueries };
export default 'dummy';
