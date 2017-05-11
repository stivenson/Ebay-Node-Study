/**
 * example ebay API request to Trading:GetUser
 */

var ebay = require('./index.js');

ebay.xmlRequest({
  serviceName : 'Trading',
  opType : 'GetUser',

  // app/environment
  // get of https://developer.ebay.com/my/keys

  devId: '8a649e9b-1896-489b-bc6e-d0fb2722978b',
  certId: 'SBX-08faa0a319a4-0cce-4df3-bb51-38fe',
  appId: 'Stivenso-cuembyte-SBX-a08faa0a3-79799fcd',
  sandbox: false,

  // Get auth token of http://developer.ebay.com/quickstartguide/sample/js/default.aspx?index=0
  authToken: 'AgAAAA**AQAAAA**aAAAAA**k98UWQ**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6ACkoCkDZKKpA6dj6x9nY+seQ**jroDAA**AAMAAA**v+6GaCZK/BqyCrwTYiNjM+1cEf0lwS09of3b3N8eFEbs63/m0mncGYSDEGMNknpGNKptAm+BqcU5q2SmFAbk7ZWuirujXzIcvkkDz8JlLnEOmPSXRa0+OUTQyCskgXQTFulLBxdfAgiRRnn8GnmcZJHsrZ6i8QV1OT8gHqWtgo/xtSp3Z5dCdBhnUYdOPt+XeQkoc7ncaNUwl2lAalcpeAw5USyeeJme02/8/SfFtBF7BY1AbdC3sQdK3IyklOyIEvR69oYqgr0Quikm3hMAuzB9KZ72TaovbtMMyS1M3v4pDfK2CtXROWfC0w+mdmY1sF1IRgCDpCQPbIyHM3podJqnyTnyUrjVNiR3FcLTzMbwNuYjjW43Oo1zZkooO4RauRWZasjgp0FdlhUjfHujwOIccygHxy22rsKyEmsVsPyrWXuUXIcvnavtMp5y+SrRIICoC6Yf+71f4iq9NqyrNI1f+KFDOuX4ENj+18kRmPOV26MsREgsALgm60lD2yrzOnR20Nzj6Zfp8LoYIW+TQStaJmIKruYUHSHyM1cbLWO3jCdmpllW46dlW6RJnX5Auq8DKcZQUlULv6QT+e72B557INMePSQDyhzsweePfoQ5uRTsEs0mBcWyUZa8VB9XcCb97YBU6k3IIoweNERyNVVPeUO5J3QzslK1Fe0zDO097ZxIfBLpGGZohDrd9xpy0dvKAVkqN9fFAs4yYgT0Csvv3/xgRe1C3hRns7V5wYHPTLGodEpok/9e06r4HF1Y',

  params: {
    'IncludeFeatureEligibility': true
  }
}, function(error, results) {
  console.log(results);
});
