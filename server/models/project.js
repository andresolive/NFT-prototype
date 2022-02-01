'use strict'

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    active: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    contract: {
      type: DataTypes.STRING
    },
    database: {
      type: DataTypes.STRING
    },
    opensea_slug: {
      type: DataTypes.STRING
    },
    update_transfers: {
      type: DataTypes.INTEGER
    },
    update_events: {
      type: DataTypes.INTEGER
    },
    first_token_id: {
      type: DataTypes.INTEGER
    },
    last_token_id: {
      type: DataTypes.INTEGER
    },
    first_date: {
      type: DataTypes.DATE
    },
    last_date: {
      type: DataTypes.DATE
    },
    assets_count: {
      type: DataTypes.INTEGER
    },
    events_count: {
      type: DataTypes.INTEGER
    },
    listings_count: {
      type: DataTypes.INTEGER
    },
    transfers_count: {
      type: DataTypes.INTEGER
    },
    good_percentage: {
      type: DataTypes.FLOAT
    },
    project_img: {
      type: DataTypes.STRING
    }
  })

  Project.associate = (models) => {
    Project.hasMany(models.Metric);
    Project.hasMany(models.Asset);
    Project.hasMany(models.Trait_value);
  }

  return Project;
}