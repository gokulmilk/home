const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');

// @route   POST api/auth/signup
// @desc    Register user
router.post('/signup', async (req, res) => {
    const { name, mobile, email, password } = req.body;

    try {
        let user = await User.findOne({ mobile });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({ name, mobile, email, password });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' }, (err, token) => {
            if (err) throw err;
            res.json({ token, user: { name: user.name, mobile: user.mobile, email: user.email } });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/auth/login
// @desc    Authenticate user & get token
router.post('/login', async (req, res) => {
    const { identifier, password } = req.body;

    try {
        let user = await User.findOne({
            $or: [{ mobile: identifier }, { email: identifier.toLowerCase() }]
        });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' }, (err, token) => {
            if (err) throw err;
            res.json({
                token,
                user: {
                    name: user.name,
                    mobile: user.mobile,
                    email: user.email,
                    costPerFat: user.costPerFat,
                    language: user.language,
                    notificationsEnabled: user.notificationsEnabled
                }
            });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/auth/profile
// @desc    Update profile
router.put('/profile', auth, async (req, res) => {
    const { name, email, mobile, costPerFat, language, notificationsEnabled } = req.body;

    try {
        let user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ msg: 'User not found' });

        if (name) user.name = name;
        if (email) user.email = email;
        if (mobile) user.mobile = mobile;
        if (costPerFat !== undefined) user.costPerFat = costPerFat;
        if (language) user.language = language;
        if (notificationsEnabled !== undefined) user.notificationsEnabled = notificationsEnabled;

        await user.save();
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
