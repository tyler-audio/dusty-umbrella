const express = require('express');
const cors = require('cors');
const path = require('path');

const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: '50000' }));
app.use(express.json({ limit: '50mb' }));

// app.use('/api', router);

app.listen(PORT, () => console.log('Connected to server'));