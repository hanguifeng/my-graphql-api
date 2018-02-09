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

const users = async () => {
  const querySQL = 'SELECT id, name, password, accountImage, sex, nickName, phoneNumber FROM Users';
  const usersData = await execSQLFactory(querySQL, { model: UserModel });
  console.log(usersData);
  return usersData;
};
const commodities = async () => {
  const querySQL = 'SELECT id, name, price, image, category, goodsDesc FROM Commodities';
  const commoditiesData = await execSQLFactory(querySQL, { model: CommoditiesModel });
  return commoditiesData;
};

export const getViewer = () => ({
  users: users(),
  commodities: commodities(),
});
console.log(getViewer());
export default 'dummy';
