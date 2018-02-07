import {
    GraphQLObjectType,
  } from 'graphql';
  
  import {
    nodeDefinitions,
    fromGlobalId,
  } from '../graphqlRelay';
  import typeList from './queries/typeList';
  import { getObjectFromTypeAndId } from './queries/Helpers';
  
  export const dataModelToGraphQLType = (modelString: string): GraphQLObjectType => {
    return require('./types')[`${modelString}`];
  };
  
  const { nodeInterface, nodeField } = nodeDefinitions(
    async (globalId) => {
      const { type, id } = fromGlobalId(globalId);
      if (typeList[type]) {
        return await typeList[type].fetcher(type, id);
      }
      return await getObjectFromTypeAndId(type, id);
    },
    (obj) => {
      if (typeList[obj.type]) {
        return typeList[obj.type].getType();
      }
      const typeString = obj.type;
      return dataModelToGraphQLType(typeString);
    }
  );
  
  export default { nodeInterface, nodeField };
  