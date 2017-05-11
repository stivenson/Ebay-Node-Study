/**
 * example ebay API request to Trading:GetCategoryFeatures
 */

var ebay = require('./index.js');

ebay.xmlRequest({
  serviceName : 'Trading',
  opType : 'GetCategoryFeatures',

  devId: '----',
  certId: '----',
  appId: '----',
  sandbox: false,
  authToken: '----',
  
  params: {
    'CategoryID': '267',
    'AllFeaturesForCategory': true
  }

}, function(error, results) {
  console.log(results);
});
