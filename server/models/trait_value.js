'use strict';

module.exports = (sequelize, DataTypes) => {
  const Trait_value = sequelize.define('Trait_value', {

    type: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.STRING
    },
    count: {
      type: DataTypes.INTEGER
    },
    total: {
      type: DataTypes.INTEGER
    },
    rarity: {
      type: DataTypes.FLOAT
    }
  })

  Trait_value.associate = (models) => {
    Trait_value.belongsToMany(models.Asset, {
      through: "Join_Asset_Trait_value"
    });
    Trait_value.belongsTo(models.Project);
  }

  return Trait_value;
}