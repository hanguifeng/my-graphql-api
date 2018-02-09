import {
  GraphQLList,
  // GraphQLNonNull,
} from 'graphql';
import { CommodityType } from './commoditiesTypes';

const commoditiesQueries = {
  commodities: {
    type: new GraphQLList(CommodityType),
    resolve: commodities => commodities,
  },
};

export { commoditiesQueries };
export default 'dummy';
