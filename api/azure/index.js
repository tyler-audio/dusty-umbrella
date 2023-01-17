// require('dotenv').config();
// const fs = require('fs');
// const https = require('https');
// const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
// const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;

// const key = process.env.AZURE_SUBSCRIPTION_KEY;
// const endpoint = process.env.AZURE_ENDPOINT;

// const computerVisionClient = new ComputerVisionClient(
//   new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint
// );

// const analysis = async (filePath) => {

//   const data = await computerVisionClient.analyzeImageInStream(
//     () => fs.createReadStream(filePath),
//     {
//       visualFeatures: ['Color', 'Tags', 'Faces', 'Adult', 'Description']
//     }
//   );

//   return data;
// };

// module.exports = { analysis };