const express = require('express');
const buildingController = require('../controllers/buildingController');
const { validateBuilding } = require('../middleware/validationMiddleware');
const router = express.Router();

router.post('/', validateBuilding, buildingController.createBuilding);
router.get('/', buildingController.getAllBuildings);
router.put('/:id', validateBuilding, buildingController.updateBuilding);
router.delete('/:id', buildingController.deleteBuilding);

module.exports = router;
