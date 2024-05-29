const express = require('express');
const buildingController = require('../controllers/buildingController');
const router = express.Router();

router.post('/', buildingController.createBuilding);
router.get('/', buildingController.getAllBuildings);

module.exports = router;
