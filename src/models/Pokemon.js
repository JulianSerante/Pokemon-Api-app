const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('pokemon', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    attack: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    defense: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    speed: {
      type: DataTypes.STRING,
    },
    height: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
    },
    created:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, { timestamps: false });
};
