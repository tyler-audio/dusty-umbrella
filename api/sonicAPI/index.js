const axios = require('axios');

const url = {
  key: 'analyze/key',
  loudness: 'analyze/loudness'
}
const sonicAPI = axios.create({
  baseURL: 'https://api.sonicAPI.com/'
});

module.exports = { url, sonicAPI };