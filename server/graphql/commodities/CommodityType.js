import {
  GraphQLString,
  GraphQLFloat,
  GraphQLObjectType,
} from 'graphql';
import {
  connectionDefinitions,
  globalIdField,
} from 'graphql-relay';

const CommodityType = new GraphQLObjectType({
  name: 'CommodityType',
  description: 'Commodity信息',
  fields: () => Object.assign({
    id: globalIdField('CommodityType'),
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
    desc: {
      type: GraphQLString,
      resolve: async commodities => commodities.desc,
    },
    category: {
      type: GraphQLString,
      resolve: async commodities => commodities.category,
    },
  }),
});

export const {
  connectionType: CommoditiesConnection,
} = connectionDefinitions({
  name: 'CommodityType',
  nodeType: CommodityType,
});

export { CommodityType };
export default 'dummy';
