'use strict';

const express = require('express');
const router = express.Router();

// controller functions
const project = require('./controllers/Projects/project.js');
const metric = require('./controllers/Metrics/metric.js');
const asset = require('./controllers/Assets/asset.js');
const listing = require('./controllers/Listings/listing.js');
const trait = require('./controllers/Traits/trait_value.js');
const transfer = require('./controllers/Transfers/transfers.js');


router.get('/projects', project.getAllProjects);
router.get('/projects/name/:name', project.getProjectsByName);
router.get('/projects/id/:project_id', project.getProjectById);

router.get('/assets', asset.getAllAssets);
router.get('/assets/project/:project_id', asset.getAllProjectAssets);
router.get('/assets/token/:token_id', asset.getAssetByTokenId);

router.get('/listings', listing.getAllListings);

router.get('/traits/id/:project_id', trait.getAllProjectTraits);

router.get('/transfers/id/:project_id', transfer.getAllProjectTransfers);



module.exports = router;