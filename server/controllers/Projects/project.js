'use strict';

const { Sequelize } = require('../../models/index');
const Op = Sequelize.Op;
const db = require('../../models/index');

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await db.Project.findAll({
      include: {
        model: db.Metric, 
        model: db.Trait_value,
        model: db.Asset, 
        include: {
          model: db.Transfer,
          model: db.Listing,
          // model: db.Trait_value --> trait values and assets join table is still empty, so this returns nothing
        }
      }
    });
    console.log('getAllProjects successful')
    res.send(projects);
  }
  catch (e) {
    console.error('Error in the projects controller', e)
    res.status = 500;
  }
}

exports.getProjectsByName = async (req, res) => {
  try {
    const projects = await db.Project.findAll({
      where: {
        description: {
          [Op.like]: `%${req.params.name}%`
        }
      }
    })
    console.log('getProjectsByName successful')
    res.send(projects);
  }
  catch (e) {
    console.error('Error in the projects controller!', e)
    res.status = 500;
  }
}

exports.getProjectById = async (req, res) => {
  try {
    const project = await db.Project.findOne({
      where: {
        id: req.params.project_id
      },
      include: {
        model: db.Metric, 
        model: db.Trait_value,
        model: db.Asset, 
        include: {
          model: db.Transfer,
          model: db.Listing,
          // model: db.Trait_value --> trait values and assets join table is still empty, so this returns nothing
        }
      }
    })
    if (project) {
      res.send(project)
    }
    else {
      res.status = 404
      res.send(`Error! Project with id = ${req.params.project_id} does not exist!`)
    }
  }
  catch (e) {
    console.error('Error in the projects controller!', e)
    res.status = 500;
  }
}

