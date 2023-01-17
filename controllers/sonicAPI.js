require('dotenv').config();
const fs = require('fs');
const util = require('util');

const { url, sonicAPI } = require('../api/sonicAPI/index');
const { uploadFile } = require('../api/aws/s3');

const unlinkFile = util.promisify(fs.unlink);

const accessID = process.env.SONIC_ACCESS_ID;
const format = 'json';

const getFilePath = async (file) => {
  const fileData = await uploadFile(file);
  return fileData.Location;
};

module.exports = {
  getSongKey: async (req, res) => {
    try {
      const input_file = await getFilePath(req.file);
      const params = { format, input_file: 'https://scry-media.s3.us-west-1.amazonaws.com/cb769e8aaca1fbacd55502c3bde0ccd0', access_id: accessID };

      await sonicAPI({
        method: 'get',
        url: url.key,
        params
      })
        .then((result) => {
          const data = result.data;
          res.status(data.status.code);
          res.json(data.tonart_result);
        })
        .catch((err) => { throw err.response.data });

      await unlinkFile(req.file.path);
    } catch (err) {
      console.error(err);
    }
  },
  getLoudnessRange: async (req, res) => {
    try {
      const input_file = await getFilePath(req.file);

      await sonicAPI({
        method: 'get',
        url: url.loudness,
        params: {
          format,
          input_file,
          access_id: accessID
        }
      })
        .then((result) => {
          const data = result.data;
          res.status(data.status.code);
          res.json(data.loudness_result);
        })
        .catch((err) => console.error(err));

      await unlinkFile(req.file.path);
    } catch (err) {
      console.error(err);
    }
  }
};