/**
 * example ebay API request to Trading:GetCategorySpecifics
 */

var ebay = require('./index.js');

ebay.xmlRequest({
  serviceName : 'Trading',
  opType : 'GetCategorySpecifics',

  devId: '----',
  certId: '----',
  appId: '----',
  sandbox: false,
  authToken: '----',
  
  params: {
    'CategoryID': 267,
  }

}, function(error, results) {
  console.log(results);
});
