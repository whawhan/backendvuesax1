'use strict';
module.exports = (sequelize, DataTypes) => {
  const master_type_jabatan = sequelize.define('master_type_jabatan', {
    id_type_jabatan: DataTypes.INTEGER,
    nama_type_jabatan_s: DataTypes.STRING,
    nama_type_jabatan_f: DataTypes.STRING,
    kode_eselon: DataTypes.STRING
  }, {
    underscored: true,
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    // define the table's name
    tableName: 'master_type_jabatan'
  });
  master_type_jabatan.removeAttribute('id')
  master_type_jabatan.associate = function(models) {
    // associations can be defined here
  };
  return master_type_jabatan;
};