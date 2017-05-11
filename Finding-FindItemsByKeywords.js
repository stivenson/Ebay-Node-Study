/**
 * example eBay API request to FindingService:findItemsByKeywords
 */

var ebay = require('./index.js');

var params = {
  keywords: ["Camas", "Colombia"],

  // add additional fields
  outputSelector: ['AspectHistogram'],

  paginationInput: {
    entriesPerPage: 10
  },  

  itemFilter: [
    {name: 'FreeShippingOnly', value: true},
    {name: 'MaxPrice', value: '150'}
  ],

  domainFilter: [
    {name: 'domainName', value: 'Digital_Cameras'}
  ]
};

ebay.xmlRequest({
    serviceName: 'Finding',
    opType: 'findItemsByKeywords',
    appId: '----', 
    params: params,
    parser: ebay.parseResponseJson    // (default)
  },
  // gets all the items together in a merged array
  function itemsCallback(error, itemsResponse) {
    if (error) throw error;

    var items = itemsResponse.searchResult.item;

    console.log('Found', items.length, 'items');
    
    for (var i = 0; i < items.length; i++) {
      console.log(' - ' + items[i].title);
      console.log(items[i]);
    }  
  }
);
