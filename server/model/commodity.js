import DataType from 'sequelize';
import { sequelize } from '../sequelize';

const CommodityModel = sequelize.define('Commoditie', {
  type: {
    type: new DataType.VIRTUAL(DataType.STRING),
    get() {
      return 'CommodityType';
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
  price: {
    type: DataType.DECIMAL,
    allowNull: false,
  },
  image: {
    type: DataType.STRING,
    allowNull: false,
  },
  desc: {
    type: DataType.STRING,
    allowNull: false,
  },
  category: {
    type: DataType.STRING,
    allowNull: false,
  },
});

export default CommodityModel;
