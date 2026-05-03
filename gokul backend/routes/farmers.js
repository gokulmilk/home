const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Farmer = require('../models/Farmer');

// @route   GET api/farmers
// @desc    Get all farmers for current milkman
router.get('/', auth, async (req, res) => {
    try {
        const farmers = await Farmer.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(farmers);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// @route   POST api/farmers
// @desc    Add new farmer
router.post('/', auth, async (req, res) => {
    const { name, mobile, fat } = req.body;

    try {
        const newFarmer = new Farmer({
            user: req.user.id,
            name,
            mobile,
            fat
        });

        const farmer = await newFarmer.save();
        res.json(farmer);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});

// @route   PUT api/farmers/:id
// @desc    Update farmer (active status, name, etc.)
router.put('/:id', auth, async (req, res) => {
    const { name, fat, active } = req.body;

    try {
        let farmer = await Farmer.findById(req.params.id);
        if (!farmer) return res.status(404).json({ msg: 'Farmer not found' });

        // Make sure user owns farmer
        if (farmer.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        if (name) farmer.name = name;
        if (mobile) farmer.mobile = mobile;
        if (fat !== undefined) farmer.fat = fat;
        if (active !== undefined) farmer.active = active;

        await farmer.save();
        res.json(farmer);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});

module.exports = router;
