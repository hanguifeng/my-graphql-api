import execSQLFactory from '../helper';
import UserModel from '../model/user';

export class UserDomain {
  static findOneByPassword(condition) {
    const conditionName = Object.keys(condition.where);
    const filterConditionName = conditionName.filter(n => {
      if (condition.where[n]) {
        return true;
      }
    });
    const conditionValue = condition.where[filterConditionName[0]];
    const querySQL = `SELECT * FROM Users WHERE ${filterConditionName[0]}="${conditionValue}"`;
    const users = execSQLFactory(querySQL, { model: UserModel });
    return users;
  }
  static async create(user) {
    return await UserModel.create(user);
  }
}

export default 'dummy';
