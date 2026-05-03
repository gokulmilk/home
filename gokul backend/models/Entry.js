const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'Farmer', required: true },
    qty: { type: Number, required: true },
    fat: { type: Number, default: 0 },
    shift: { type: String, enum: ['morning', 'evening'], required: true },
    date: { type: String, required: true }, // Format: YYYY-MM-DD
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Entry', EntrySchema);
