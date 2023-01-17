require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');

const bucket = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({ region, accessKeyId, secretAccessKey });

const uploadFile = (file) => {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucket,
    Body: fileStream,
    Key: file.filename
  };

  return s3.upload(uploadParams).promise();
}

const downloadFile = (fileKey) => {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucket
  };

  return s3.getObject(downloadParams).createReadStream();
}

// delete file

module.exports = { uploadFile };