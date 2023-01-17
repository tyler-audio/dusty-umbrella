const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({ dest: 'uploads/'}).single('audio');

const sonicAPI = require('../controllers/sonicAPI');

router
  .post('/key', upload, sonicAPI.getSongKey)
  .post('/loudness', upload, sonicAPI.getLoudnessRange)

module.exports = router;