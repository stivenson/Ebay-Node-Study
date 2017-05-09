/**
 * example ebay API request to Shopping:GetSingleItem
 */

var ebay = require('./index.js');

ebay.xmlRequest({
  'serviceName': 'Shopping',
  'opType': 'GetSingleItem',
  'appId': 'Stivenso-cuembyte-PRD-d08faa0a3-48967901',      // FILL IN YOUR OWN APP KEY, GET ONE HERE: https://publisher.ebaypartnernetwork.com/PublisherToolsAPI
  
  params: {
    'ItemID': '282368405191'      // FILL IN A REAL ItemID
  }
},
function(error, data) {
  console.log(data);
});
