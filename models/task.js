'use strict';
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    name: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  }, {
    underscored: true,
  });
  task.associate = function(models) {
    // associations can be defined here
  };
  return task;
};