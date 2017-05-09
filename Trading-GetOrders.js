/**
 * example ebay API request to Trading:GetOrders
 */

var ebay = require('./index.js');

ebay.xmlRequest({
  serviceName : 'Trading',
  opType : 'GetOrders',

  // app/environment
  // get of https://developer.ebay.com/my/keys

  devId: '8a649e9b-1896-489b-bc6e-d0fb2722978b',
  certId: 'SBX-08faa0a319a4-0cce-4df3-bb51-38fe',
  appId: 'Stivenso-cuembyte-SBX-a08faa0a3-79799fcd',
  sandbox: true,

  // Get auth token of http://developer.ebay.com/quickstartguide/sample/js/default.aspx?index=0
  authToken: 'v^1.1#i^1#p^1#I^3#f^0#r^0#t^H4sIAAAAAAAAAOVXbWwURRju9dpChYI/tEoDeCz6Q2T3Zvdu72439MhBwV5CuaN3bYQKx37M9lb2do+duZYTYmoJjZEYgwQ1SqQRNBoTUz8DIcEEEjFB0MQQfhATSECt32BAIjE6u3eUayV8FjHx/lzmnXfeeZ7nfd+ZHdBXVz9noHXg9wbPhOrBPtBX7fGwk0B9Xe0jU7zVTbVVoMLBM9j3YF9Nv/e7eUjKGXmxHaK8ZSLoW5czTCS6xmaqYJuiJSEdiaaUg0jEipiKtS0ROQaIedvClmIZlC/e0kxxsiRoKhQkLSALahgSq3kpZtpqpiQ+GCAOSigcAeFISCXzCBVg3ERYMjFZD9gwDXgaCGmWF1kgAsAIPL+C8nVCG+mWSVwYQEVduKK71q7AenWoEkLQxiQIFY3HFqcSsXjLoqXpef6KWNGyDiks4QIaPVpoqdDXKRkFePVtkOstpgqKAhGi/NHSDqODirFLYG4Cvit1hJNDMg/VoKpwMBIJjYuUiy07J+Gr43AsukprrqsITazj4rUUJWrIT0AFl0dLSYh4i8/5W1aQDF3Tod1MLVoQWx5LJqloCus90EQWrRRgTi5iSCfbW2gVRDRJAlKADkaEUFgAbHmjUrSyzGN2WmiZqu6IhnxLLbwAEtRwrDagQhvilDATdkzDDqJKv/AlDYPcCieppSwWcNZ08gpzRAifO7x2BkZWY2zrcgHDkQhjJ1yJSNvk87pKjZ10a7FcPutQM5XFOC/6/b29vUxvgLHsbj8HAOt/rG1JSsnCnEQRX6fXS/76tRfQuktFIW1M/EVczBMs60itEgBmNxXlgsFAKFTWfTSs6FjrPwwVnP2jO2K8OoRXArKqSDxpEI0N8cJ4dEi0XKR+BweUpSKdk+w1EOcNSYG0QuqskIO2rooBXuMCEQ3SakjQ6KCgabTMqyGa1SAEEMqyIkT+T41yvaWeUqw8TFqGrhTHpeDHrdgDtpqUbFxMQcMghuut+iuSRA7J207P6fUboujEQCSIlNcZp7YZxcr5LYkcao4p46K+Jd46uQ//U0klBEtMdbV0kTEuXQb1KIwNkVWwyR3OJJxzPW2tgSbpEmxbhgHtTvaWlBi/E/0OneZXZKUYOpEx819jdoPH5E3WtoTvIOuafk/XFZizQSEYCHIhAG6J20I3r+niv3Bo3VBiWy2EoXobPkD8o59D0Sr3x/Z7PgL9nvfIiwr4wUPsbDCrzttR453chHQMGV3SGKR3m+Qr34bMGljMS7pdXefpmj70dqbiATa4Etw/8gSr97KTKt5jYPrlmVp26n0NbBjwQGB5FgCwAsy+PFvDNtbcs6XpzM4ZbSf3/jbsUz7d/1LLnrbt3aBhxMnjqa0ilVH1whvHTrSuZy7+4N00f0NPIrlWzL4+sKsjM/f81+enHjsR/qJz5sq1R5d/la3/ZMeB4JlZ7Clu6K59M+ecVbYeOv/l5pNP/nHwxLZdEz5Gr8w/22XvrzrEpevXKgcyEePHib9kNg5ePLXj6UUNtQc/61++fcPkbc+aD+x4PDW0bwu3alnXoz0b/uy6+96+U0e8qxacLkz9YOjzw8N7luyOv5q4YFDHf9J9Rv1rc5/vfGdKa7Z9k37umfWNMyD68MLmaRsnfr965uL1T+05dPrwcLHjr5cHdjc9/OuUZDzx7sT4kQu+SDq7c2jrz7snH33rG/nNPN9Md2S497ONyXPH2xtXPjd87Nu9fnH1tBent5XS9zfC62/MGg8AAA==',

  params: {
    'OrderStatus': 'Active',
    'NumberOfDays': 1
  }
}, function(error, results) {
  console.log(results);
});
