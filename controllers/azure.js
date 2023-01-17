const fs = require('fs')
const util = require('util');

const { analysis } = require('../api/azure/index');
const { uploadFile } = require('../api/aws/s3');

const getFilePath = async (file) => {
  const fileData = await uploadFile(file);
  return fileData.Location;
};

const unlinkFile = util.promisify(fs.unlink);

module.exports = {
  analyzeImage: async (req, res) => {
    try {
      const data = await analysis(req.file.path);

      if (!data.adult.isAdultContent && !data.adult.isRacyContent && !data.adult.isGoryContent) {
        const url = await getFilePath(req.file);
        data.url = url;
        res.status(201).json(data);
      } else {
        res.send('Restricted');
      }

      await unlinkFile(req.file.path);
    } catch (err) {
      console.error(err);
    }
  }
};