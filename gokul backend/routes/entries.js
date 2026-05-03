const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Entry = require('../models/Entry');

// @route   GET api/entries
// @desc    Get entries for a specific date
router.get('/', auth, async (req, res) => {
    const { date } = req.query; // Expecting YYYY-MM-DD
    try {
        const query = { user: req.user.id };
        if (date) query.date = date;

        const entries = await Entry.find(query).populate('farmer', 'name').sort({ timestamp: -1 });
        res.json(entries);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/entries
// @desc    Add or update milk entry
router.post('/', auth, async (req, res) => {
    const { farmerId, qty, fat, shift, date } = req.body;

    try {
        // Check if entry already exists for this farmer, date, and shift
        let entry = await Entry.findOne({
            user: req.user.id,
            farmer: farmerId,
            date,
            shift
        });

        if (entry) {
            entry.qty = qty;
            if (fat !== undefined) entry.fat = fat;
            entry.timestamp = Date.now();
            await entry.save();
        } else {
            entry = new Entry({
                user: req.user.id,
                farmer: farmerId,
                qty,
                fat,
                shift,
                date
            });
            await entry.save();
        }

        res.json(entry);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/entries/farmer/:farmerId
// @desc    Get entries for a specific farmer (for reports)
router.get('/farmer/:farmerId', auth, async (req, res) => {
    try {
        const entries = await Entry.find({
            user: req.user.id,
            farmer: req.params.farmerId
        }).sort({ date: 1, shift: 1 });
        res.json(entries);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
