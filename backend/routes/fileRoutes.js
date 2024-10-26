// fileRoutes.js
const express = require('express');
const { createFolder, deleteFolder } = require('../controllers/fileController');
const router = express.Router();
router.post('/folder', createFolder);
router.delete('/folder/:id', deleteFolder);
module.exports = router;