'use strict';

const db = require('../../models/index');

exports.getAllProjectTraits = async (req, res) => {
  try {
    const traits = await db.Trait_value.findAll({
      where: {
        ProjectId: req.params.project_id
      }
    })
    res.send(traits);
  }
  catch (e) {
    console.error('Error in the traits controller! ', e);
    res.status = 500;
  }
}