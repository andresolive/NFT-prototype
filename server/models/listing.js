'use strict';

module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    from: {
      type: DataTypes.DATE
    },
    till: {
      type: DataTypes.DATE
    },
    price: {
      type: DataTypes.FLOAT
    }
  })

  Listing.associate = (models) => {
    Listing.belongsTo(models.Asset);
  }

  return Listing;
}