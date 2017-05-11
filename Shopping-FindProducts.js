/**
 * example eBay API request to Shopping:FindProducts
 */

var ebay = require('./index.js');

ebay.xmlRequest({
  serviceName : 'Shopping',
  opType : 'FindProducts',

  devId: '----',
  certId: '----',
  appId: '----',
  sandbox: true,
  
  params: {
    'QueryKeywords': 'astronomía' 
  }
  // optional params: <ProductID type="ProductIDCodeType">

}, function(error, results) {
  console.log(error);
  console.log(results);
});
