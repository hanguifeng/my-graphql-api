// export class User {}

// const USER_ID = 'me';

// const viewer = new User();
// viewer.id = USER_ID;
// const usersById = {
//   [USER_ID]: viewer,
// };

// export function getUser(id) {
//   return usersById[id];
// }
import execSQLFactory from '../helper';
import UserModel from '../model/user';
import CommoditiesModel from '../model/commodity';

const usersData = () => {
  const querySQL = 'SELECT * FROM Users';
  const users = execSQLFactory(querySQL, { model: UserModel });
  return users;
};

const querySQL1 = 'SELECT id, name, price, image, category, goodsDesc FROM Commodities';
const commoditiesData = execSQLFactory(querySQL1, { model: CommoditiesModel });

export const getViewer = () => ({
  users: usersData,
  commodities: commoditiesData,
});

export default 'dummy';
