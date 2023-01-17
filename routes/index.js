const express = require('express');
const router = express.Router();

const sonicAPI = require('./sonicAPI');
const azure = require('./azure');

router
  .use('/sonic', sonicAPI)
  .use('/azure', azure);

module.exports = router;