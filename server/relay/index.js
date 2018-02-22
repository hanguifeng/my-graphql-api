import {
  GraphQLObjectType,
} from 'graphql';

import {
  nodeDefinitions,
  fromGlobalId,
} from 'graphql-relay';
import { UserDomain } from '../domain';
import { UserType } from '../graphql/users/UserType';

export const { nodeInterface } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    // if (type === 'UserType') {
    //   return getUserData(id);
    // }
    return null;
  },
  (obj) => {
    const typeString = obj.type;
    return 'typeString';
  }
);
// console.log(nodeInterface());
