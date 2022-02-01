'use strict';

const db = require('../../models/index');


exports.getAllAssets = async (req, res) => {
  try {
    const assets = await db.Asset.findAll()
    console.log('getAllAssets successful')
    res.send(assets);
  }
  catch (e) {
    console.error('Error in the controller! ', e);
    res.status = 500;
  }
}

exports.getAllProjectAssets = async (req, res) => {
  try {
    const assets = await db.Asset.findAll({
      where: {
        ProjectId: req.params.project_id
      }
    })
    res.send(assets);
  }
  catch (e) {
    console.error('Error in the controller! ', e);
    res.status = 500;
  }
}

exports.getAssetByTokenId = async (req, res) => {
  try {
    const asset = await db.Asset.findOne({
      where: {
        token_id: req.params.token_id
      }
    })
    res.send(asset);
  }
  catch (e) {
    console.error('Error in the assets controller! ', e);
    res.status = 500;
  }
}
