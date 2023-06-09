module.exports = (sequelize, Sequelize) => {
  return sequelize.define('Health', {
    url: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    timestamp: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    },
  });
};
