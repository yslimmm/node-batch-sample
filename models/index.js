const path = require('path');
const Sequelize = require('sequelize');

const database = {};

const Initialize = (options) => {
  const sequelize = new Sequelize(options);
  
  database.transcripts = require(path.join(__dirname, 'transcripts'))(
    sequelize,
    Sequelize.DataTypes
  );
  
  database.sequelize = sequelize;
  database.Sequelize = Sequelize;

  return sequelize.sync();
};

module.exports = {
  database,
  Initialize,
};
