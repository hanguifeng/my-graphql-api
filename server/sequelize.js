import Sequelize from 'sequelize';
import dataloaderSequelize from 'dataloader-sequelize';
import config from './config';

const sequelize = new Sequelize(
  config.devlopment.database,
  config.devlopment.username,
  config.devlopment.password,
  {
    host: config.devlopment.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 30000,
    },
  },
);

dataloaderSequelize(sequelize);

export { sequelize };
export default 'dummy';
