'use strict';
module.exports = (sequelize, DataTypes) => {
  const master_status_aktiv = sequelize.define('master_status_aktiv', {
    kode_status_aktif: DataTypes.INTEGER,
    nama_status_aktif: DataTypes.STRING
  }, {
    underscored: true,
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    // define the table's name
    tableName: 'master_jabatan'
  });
  master_status_aktiv.removeAttribute('id')
  master_status_aktiv.associate = function(models) {
    // associations can be defined here
  };
  return master_status_aktiv;
};