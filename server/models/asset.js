'use strict';

module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define('Asset', {

    id: {
      type: DataTypes.INTEGER
    },
    token_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    data: {
      type: DataTypes.JSON
    },
    inserted_at: {
      type: DataTypes.DATE
    },
    processed_at: {
      type: DataTypes.DATE
    }
  })

  Asset.associate = (models) => {
    Asset.belongsTo(models.Project);
    Asset.hasMany(models.Transfer);
    Asset.hasMany(models.Listing);
    Asset.belongsToMany(models.Trait_value, {
      through: "Join_Asset_Trait_value"
    });
    Asset.belongsToMany(models.Portfolio, {
      through: "Join_Portfolio_Asset"
    })
  }

  return Asset;
}