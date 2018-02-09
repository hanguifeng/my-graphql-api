import {
  GraphQLString,
  // GraphQLNonNull,
  GraphQLFloat,
  GraphQLObjectType,
} from 'graphql';
import graphqlRelay from '../../graphqlRelay';

const CommodityType = new GraphQLObjectType({
  name: 'CommodityType',
  description: 'Commodity信息',
  fields: () => Object.assign({
    id: graphqlRelay.globalId,
    name: {
      type: GraphQLString,
      resolve: async commodities => commodities.name,
    },
    price: {
      type: GraphQLFloat,
      resolve: async commodities => commodities.price,
    },
    image: {
      type: GraphQLString,
      resolve: async commodities => commodities.image,
    },
    goodsDesc: {
      type: GraphQLString,
      resolve: async commodities => commodities.goodsDesc,
    },
    category: {
      type: GraphQLString,
      resolve: async commodities => commodities.category,
    },
  }),
});

export { CommodityType };
export default 'dummy';
