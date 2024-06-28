const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //Register Model
const Model = mongoose.model('trips');


const tripsList = async (req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();


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



const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({ 'code': req.params.tripsCode }) // Return single record
        .exec();

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

    console.log(q);
}


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
