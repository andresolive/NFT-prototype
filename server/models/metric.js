'use strict'

module.exports = (sequelize, DataTypes) => {
  const Metric = sequelize.define('Metric', {
    
    at: {
      type: DataTypes.DATE
    },
    listings_count: {
      type: DataTypes.INTEGER
    },
    listings_floor: {
      type: DataTypes.FLOAT
    },
    trades_count_1d: {
      type: DataTypes.INTEGER
    },
    trades_count_7d: {
      type: DataTypes.INTEGER
    },
    trades_count_30d: {
      type: DataTypes.INTEGER
    },
    trades_minimum_1d: {
      type: DataTypes.FLOAT
    },
    trades_minimum_7d: {
      type: DataTypes.FLOAT
    },
    trades_minimum_30d: {
      type: DataTypes.FLOAT
    },
    trades_median_1d: {
      type: DataTypes.FLOAT
    },
    trades_median_7d: {
      type: DataTypes.FLOAT
    },
    trades_median_30d: {
      type: DataTypes.FLOAT
    },
    trades_maximum_1d: {
      type: DataTypes.FLOAT
    },
    trades_maximum_7d: {
      type: DataTypes.FLOAT
    },
    trades_maximum_30d: {
      type: DataTypes.FLOAT
    },
    trades_volume_1d: {
      type: DataTypes.FLOAT
    },
    trades_volume_7d: {
      type: DataTypes.FLOAT
    },
    trades_volume_30d: {
      type: DataTypes.FLOAT
    },
    trades_volume_30d_rank: {
      type: DataTypes.INTEGER
    },
    market_cap: {
      type: DataTypes.FLOAT
    },
    market_cap_rank: {
      type: DataTypes.INTEGER
    },
    listings_percent: {
      type: DataTypes.FLOAT
    }
  })

  Metric.associate = (models) => {
    Metric.belongsTo(models.Project);
  }

  return Metric;
}