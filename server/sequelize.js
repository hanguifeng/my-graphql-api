import Sequelize from 'sequelize';
import dataloaderSequelize from 'dataloader-sequelize';
import config from './config';

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
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
