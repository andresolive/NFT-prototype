'use strict';

const db = require('../../models/index');

exports.getAllProjectTransfers = async (req, res) => {
  try {
    const transfers = await db.Asset.findAll({
      where: {
        ProjectId: req.params.project_id
      },
      include: {
        model: db.Transfer
      }
    })
    res.send(transfers);
  }
  catch (e) {
    console.error('Error in the transfers controller', e)
    res.status = 500;
  }
}