'use strict';

module.exports = (sequelize, DataTypes) => {
  const Transfer = sequelize.define('Transfer', {
    
    tx: {
      type: DataTypes.STRING
    },
    at: {
      type: DataTypes.DATE
    },
    block_number: {
      type: DataTypes.INTEGER
    },
    log_index: {
      type: DataTypes.INTEGER
    },
    from: {
      type: DataTypes.STRING
    },
    to: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    marketplace: {
      type: DataTypes.STRING
    },
    message: {
      type: DataTypes.STRING
    },
    price_eth: {
      type: DataTypes.FLOAT
    },
    price_usd: {
      type: DataTypes.FLOAT
    }
  })

  Transfer.associate = (models) => {
    Transfer.belongsTo(models.Asset);
  }

  return Transfer;
}