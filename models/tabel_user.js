'use strict';
module.exports = (sequelize, DataTypes) => {
  const tabel_user = sequelize.define('tabel_user', {
    npp: DataTypes.STRING,
    password: DataTypes.STRING,
    group_akses: DataTypes.INTEGER,
    created_date: DataTypes.DATE,
    created_by: DataTypes.STRING,
    modified_date: DataTypes.DATE,
    modified_by: DataTypes.STRING,
    active: DataTypes.INTEGER,
    kode_lokasi_tugas: DataTypes.STRING
  }, {
    underscored: true,
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    // define the table's name
    tableName: 'tabel_user'
  });
  tabel_user.removeAttribute('id')
  tabel_user.associate = function(models) {
    // associations can be defined here
  };
  return tabel_user;
};