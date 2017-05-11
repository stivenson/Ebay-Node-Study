/**
 * example ebay API request to Trading:GetOrders
 */

var ebay = require('./index.js');

ebay.xmlRequest({
  serviceName : 'Trading',
  opType : 'GetOrders',

  devId: '----',
  certId: '----',
  appId: '----',
  sandbox: true, /* info of production */
  authToken: '----',
  
  params: {
    'OrderStatus': 'Active',
    'NumberOfDays': 1
  }
}, function(error, results) {
  console.log(results);
});
