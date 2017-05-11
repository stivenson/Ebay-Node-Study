/**
 * example eBay API request to Shopping:FindProducts
 */

var ebay = require('./index.js');

ebay.xmlRequest({
  serviceName : 'Shopping',
  opType : 'FindProducts',

  devId: '8a649e9b-1896-489b-bc6e-d0fb2722978b',
  certId: 'SBX-08faa0a319a4-0cce-4df3-bb51-38fe',
  appId: 'Stivenso-cuembyte-SBX-a08faa0a3-79799fcd',
  sandbox: true,
  params: {
    'QueryKeywords': 'astronomía' 
  }

  // optional params: <ProductID type="ProductIDCodeType">

}, function(error, results) {
  console.log(error);
  console.log(results);
});
