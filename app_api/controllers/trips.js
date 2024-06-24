const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //Register Model
const Model = mongoose.model('trips');

// Get: /trips - list all trips. Include HTML status code for all outcomes and JSON message to the requesting client.

const tripsList = async (req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

    // Uncomment the following line to show result of query on console
    // console.log(q);

    if (!q) { // Database returned no data
        return res
            .status(404)
            .json(err);
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

// GET: /trips/:tripCode - lists a single trip. Response must include HTML status code for all outcomes and JSON
// message to the requesting client

const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({ 'code': req.params.tripsCode }) // Return single record
        .exec();

    // Uncomment following line to show results of query on console
    // console.log(q);

    if (!q) { // Database returned no data
        return res
            .status(404)
            .json(err);
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

 
}

// POST: /trips - adds a new trip, response must include HTML status code for all outcomes and JSON message to the requesting client
const tripsAddTrip = async (req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

    if (!q) { // Database returned no data
        return res
            .status(400)
            .json(err);
    } else { // Return new trip
        return res
            .status(201)
            .json(q);
    }

    //uncomment the following line to show results of operation on the console

    console.log(q);
}

// PUT: /trips/:tripCode - Adds a new Trip response must include HTML status code and JSON message to the requesting client for all outcomes

const tripsUpdateTrip = async(req, res) => {

    const q = await Model
        .findOneAndUpdate (
            { 'code' : req.params.tripsCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
        )
        .exec();

    console.log("Updated: " + q);
    if(!q) { // Database returned no data.
        return res
            .status(400)
            .json({ msg: "Database returned no data"});
    } else { // Return resulting updated trip
        return res
            .status(201)
            .json(q);
    }
        console.log(q);
};

// DELETE: /trips/:tripsCode
const tripsDeleteTrip = async(req, res) => {
    const q = await Model
        .deleteOne({'code': req.params.tripsCode})
        .exec();
    if (!q) {
        return res
            .status(500)
            .json({msg: "Error removing trip"});
    } else {
        return res
            .status(200)
            .json(q);
    }
}

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip,
};
