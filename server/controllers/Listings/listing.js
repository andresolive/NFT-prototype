'use strict';

const db = require('../../models/index');

exports.getAllListings = async (req, res) => {
  try {
    const listings = await db.Listing.findAll()
    console.log('getAllListings successful')
    res.send(listings);
  }
  catch (e) {
    console.log('Error in the listings controller! ', e);
    res.status = 500;
  }
}