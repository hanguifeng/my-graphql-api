import {
  GraphQLList,
  // GraphQLNonNull,
} from 'graphql';
import execSQLFactory from '../../helper';
import CommoditiesModel from '../../model/commodity';
import { CommodityType } from './commoditiesTypes';

const commoditiesQueries = {
  commodities: {
    type: new GraphQLList(CommodityType),
    resolve: async () => {
      const querySQL = 'SELECT id, name, price, image, category, goodsDesc FROM Commodities';
      const commodities = await execSQLFactory(querySQL, { model: CommoditiesModel });
      console.log(commodities);
      return commodities;
    },
  },
};

export { commoditiesQueries };
export default 'dummy';
