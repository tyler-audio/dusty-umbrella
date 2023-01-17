const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({ dest: 'uploads/'}).single('image');

const azure = require('../controllers/azure');

router
  .post('/', upload, azure.analyzeImage);

module.exports = router;