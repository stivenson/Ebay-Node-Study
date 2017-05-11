/**
 * example ebay API request to Trading:GetUser
 */

var ebay = require('./index.js');

ebay.xmlRequest({
  serviceName : 'Trading',
  opType : 'GetUser',

  devId: '----',
  certId: '----',
  appId: '----',
  sandbox: false,
  authToken: '----',

  params: {
    'IncludeFeatureEligibility': true
  }
}, function(error, results) {
  console.log(results);
});
