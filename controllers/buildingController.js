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

exports.updateBuilding = async (req, res) => {
    try {
        const building = await Building.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).send(building);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteBuilding = async (req, res) => {
    try {
        await Building.destroy({
            where: { id: req.params.id }
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).send(error);
    }
};