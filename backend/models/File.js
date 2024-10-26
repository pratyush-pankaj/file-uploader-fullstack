const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: String,
    type: { type: String, enum: ['file', 'folder'], default: 'file' },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'File', default: null },
    path: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('File', fileSchema);
