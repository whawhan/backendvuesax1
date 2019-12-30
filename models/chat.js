'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define('Chat', {
    nama_pengirim: DataTypes.STRING,
    nama_penerima: DataTypes.STRING,
    pesan: DataTypes.TEXT
  }, {});
  Chat.associate = function(models) {
    // associations can be defined here
  };
  return Chat;
};