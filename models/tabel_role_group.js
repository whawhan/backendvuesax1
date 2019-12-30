'use strict';
module.exports = (sequelize, DataTypes) => {
  const tabel_role_group = sequelize.define('tabel_role_group', {
    id_role_group: DataTypes.INTEGER,
    akses_group: DataTypes.STRING
  }, {
    underscored: true,
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    // define the table's name
    tableName: 'tabel_role_group'
  });
  tabel_role_group.removeAttribute('id')
  tabel_role_group.associate = function(models) {
    // associations can be defined here
  };
  return tabel_role_group;
};