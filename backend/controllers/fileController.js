const File = require('../models/File');
const path = require('path');
const fs = require('fs');

exports.createFolder = async (req, res) => {
    try {
        const { name, parent } = req.body;
        const folder = new File({ name, type: 'folder', parent });
        await folder.save();
        res.status(201).json(folder);
    } catch (error) {
        res.status(400).json({ message: "Folder creation failed", error });
    }
};

exports.deleteFolder = async (req, res) => {
    try {
        const { id } = req.params;
        await File.findByIdAndDelete(id);
        res.json({ message: "Folder deleted" });
    } catch (error) {
        res.status(400).json({ message: "Folder deletion failed", error });
    }
};
