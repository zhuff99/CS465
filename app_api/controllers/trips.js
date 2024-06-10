// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client

const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

const tripsFindByCode = async(req, res) => {
    const q = await Model
      .find({ 'code': req.params.tripCode }) // Return single record
      .exec();
  
      // Uncomment the following line to show results of query
      // on the console
      // console.log(q);
  
    if(!q) {
      // Database returned no data
      return res
        .status(404)
        .json(err);
    } else { // Return resulting trip list
      return res
        .status(200)
        .json(q);
    }
  };

  const tripsList = async(req, res) => {
    const q = await Model
      .find({}) // Return single record
      .exec();
  
      // Uncomment the following line to show results of query
      // on the console
      // console.log(q);
  
    if(!q) {
      // Database returned no data
      return res
        .status(404)
        .json(err);
    } else { // Return resulting trip list
      return res
        .status(200)
        .json(q);
    }
  };
  
  module.exports = {
    tripsList,
    tripsFindByCode
  };
  