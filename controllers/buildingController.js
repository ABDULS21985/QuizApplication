const { Building } = require('../models');

exports.createBuilding = async (req, res) => {
    try {
        const building = await Building.create(req.body);
        res.status(201).send(building);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllBuildings = async (req, res) => {
    try {
        const buildings = await Building.findAll();
        res.status(200).send(buildings);
    } catch (error) {
        res.status(400).send(error);
    }
};
