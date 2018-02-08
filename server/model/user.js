import DataType from 'sequelize';
import { sequelize } from '../sequelize';

const UserModel = sequelize.define('User', {
  type: {
    type: new DataType.VIRTUAL(DataType.STRING),
    get() {
      return 'UserType';
    },
  },
  id: {
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataType.STRING,
    allowNull: false,
  },
  password: {
    type: DataType.STRING,
    allowNull: false,
  },
  sex: {
    type: DataType.STRING,
    allowNull: false,
  },
  nickName: {
    type: DataType.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataType.STRING,
    allowNull: false,
  },
});

export default UserModel;
