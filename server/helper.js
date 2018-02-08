import Sequelize from 'sequelize';
import { sequelize as ORM } from './sequelize';

const execSQLFactory = async (querySQL, config) => {
  const { type, model } = config;
  const options = {
    type: type || Sequelize.QueryTypes.SELECT,
  };
  if (model) {
    options.model = model;
  }

  return ORM.query(querySQL, options);
};

export default execSQLFactory;
