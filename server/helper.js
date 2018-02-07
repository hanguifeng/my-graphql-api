import Sequelize from 'sequelize';
import { sequelize as ORM } from './sequelize';

const execSQLFactory = async (querySQL, config) => {
  const { replacements, type, model, transaction } = config;
  const options = {
    replacements,
    type: type || Sequelize.QueryTypes.SELECT,
  };
  if (model) {
    options.model = model;
  }
  if (transaction) {
    options.transaction = transaction;
  }
  return ORM.query(querySQL, options);
};

export default execSQLFactory;
