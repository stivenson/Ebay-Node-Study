/**
 * example ebay API request to Shopping:GetSingleItem
 */

var ebay = require('./index.js');

ebay.xmlRequest({
  'serviceName': 'Shopping',
  'opType': 'GetSingleItem',
  'appId': '----',      // FILL IN YOUR OWN APP KEY, GET ONE HERE: https://publisher.ebaypartnernetwork.com/PublisherToolsAPI
  
  params: {
    'ItemID': '----'      // FILL IN A REAL ItemID
  }
},
function(error, data) {
  console.log(data);
});
