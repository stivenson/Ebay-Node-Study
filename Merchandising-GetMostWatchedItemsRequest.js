/**
 * example ebay API request to Merchandising:getMostWatchedItems
 */

var ebay = require('./index.js');

ebay.xmlRequest({
  'serviceName': 'Merchandising',
  'opType': 'getMostWatchedItems',
  'appId': 'Stivenso-cuembyte-PRD-d08faa0a3-48967901',      // FILL IN YOUR OWN APP KEY, GET ONE HERE: https://publisher.ebaypartnernetwork.com/PublisherToolsAPI

  params: {}
},
function(error, data) {
  console.log(data);
  console.log('--');
  console.log(data.itemRecommendations.item[0]);
});