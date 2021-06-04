const express = require('express');
const router = express.Router();

// Import Model:
const Garden = require('../models/Garden');

// Routes:
// GET to '/garden'
// Get all plants in user's garden:
router.get('/', (req, res) => {
	Garden.find({})
		.sort({ plant_name: -1 })
		.then((plants) => {
			res.json(plants);
		});
});

// POST to '/api/garden'
// Add a plant to user's garden:
router.post('/', (req, res) => {
	const newPlant = new Garden({
		plant_name: req.body.plant_name,
		water: req.body.water,
		fertilize: req.body.fertilize,
		prune: req.body.prune,
		photo: req.body.photo,
	});
	newPlant
		.save()
		.then((plant) => res.json(plant))
		.catch((err) => console.log(err));
});

// DELETE to '/api/garden'
// Remove the plant from the user's garden:
router.delete('/:id', (req, res) => {
	Garden.findById(req.params.id)
		.then((plant) => plant.remove().then(() => res.json({ success: true })))
		.catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
