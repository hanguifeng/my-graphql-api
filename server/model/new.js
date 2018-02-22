import DataType from 'sequelize';
import { sequelize } from '../sequelize';

const NewModel = sequelize.define('New', {
  type: {
    type: new DataType.VIRTUAL(DataType.STRING),
    get() {
      return 'NewType';
    },
  },
  id: {
    type: DataType.STRING,
    allowNull: true,
    primaryKey: true,
  },
  time: {
    type: DataType.STRING,
    allowNull: true,
  },
  title: {
    type: DataType.STRING,
    allowNull: true,
  },
  url: {
    type: DataType.STRING,
    allowNull: true,
  },
  // content: {
  //   type: DataType.STRING,
  //   allowNull: true,
  // },
  // image: {
  //   type: DataType.STRING,
  //   allowNull: true,
  // },
});

export default NewModel;
