require('dotenv').config();
const axios = require('axios');

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const url = 'https://accounts.spotify.com/api/token';
const fetchToken = () => {
  axios({
    method: 'post',
    url,
    data: {
      grant_type: 'client_credentials'
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${new Buffer(`${client_id}:${client_secret}`).toString('base64')}`
    }
  })
    .then((res) => res)
    .catch((err) => console.error(err));
};

module.exports = fetchToken;