// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"216ea399-041a-48bb-8a99-d6871e3bc794\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6c6f1e2b-a1b6-4cfd-ad98-5c07191b5766\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplatFrontendIpAP\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplatFrontendIpAP\",\r\n        \"etag\": \"W/\\\"216ea399-041a-48bb-8a99-d6871e3bc794\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/publicIPAddresses/xplatTestIpAP\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"LB-AddPoll\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB/backendAddressPools/LB-AddPoll\",\r\n        \"etag\": \"W/\\\"216ea399-041a-48bb-8a99-d6871e3bc794\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1710',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"216ea399-041a-48bb-8a99-d6871e3bc794"',
  'x-ms-request-id': '9b70520f-0fab-45c1-a296-098a0ea74679',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14915',
  'x-ms-correlation-request-id': 'a1e97b04-68f0-48a4-9b1c-1d24edf81da3',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T111900Z:a1e97b04-68f0-48a4-9b1c-1d24edf81da3',
  date: 'Tue, 29 Dec 2015 11:18:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"216ea399-041a-48bb-8a99-d6871e3bc794\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6c6f1e2b-a1b6-4cfd-ad98-5c07191b5766\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplatFrontendIpAP\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplatFrontendIpAP\",\r\n        \"etag\": \"W/\\\"216ea399-041a-48bb-8a99-d6871e3bc794\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/publicIPAddresses/xplatTestIpAP\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"LB-AddPoll\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB/backendAddressPools/LB-AddPoll\",\r\n        \"etag\": \"W/\\\"216ea399-041a-48bb-8a99-d6871e3bc794\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1710',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"216ea399-041a-48bb-8a99-d6871e3bc794"',
  'x-ms-request-id': '9b70520f-0fab-45c1-a296-098a0ea74679',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14915',
  'x-ms-correlation-request-id': 'a1e97b04-68f0-48a4-9b1c-1d24edf81da3',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T111900Z:a1e97b04-68f0-48a4-9b1c-1d24edf81da3',
  date: 'Tue, 29 Dec 2015 11:18:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"778e5481-9efa-4694-a769-6766ad286191\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6c6f1e2b-a1b6-4cfd-ad98-5c07191b5766\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplatFrontendIpAP\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplatFrontendIpAP\",\r\n        \"etag\": \"W/\\\"778e5481-9efa-4694-a769-6766ad286191\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/publicIPAddresses/xplatTestIpAP\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1319',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7845131f-ec35-4647-a9eb-dfad901c551d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/7845131f-ec35-4647-a9eb-dfad901c551d?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1173',
  'x-ms-correlation-request-id': '94cb4d40-abd0-4e61-bdff-1fd83bc0760f',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T111902Z:94cb4d40-abd0-4e61-bdff-1fd83bc0760f',
  date: 'Tue, 29 Dec 2015 11:19:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"778e5481-9efa-4694-a769-6766ad286191\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6c6f1e2b-a1b6-4cfd-ad98-5c07191b5766\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplatFrontendIpAP\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplatFrontendIpAP\",\r\n        \"etag\": \"W/\\\"778e5481-9efa-4694-a769-6766ad286191\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/publicIPAddresses/xplatTestIpAP\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1319',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7845131f-ec35-4647-a9eb-dfad901c551d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/eastus/operations/7845131f-ec35-4647-a9eb-dfad901c551d?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1173',
  'x-ms-correlation-request-id': '94cb4d40-abd0-4e61-bdff-1fd83bc0760f',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T111902Z:94cb4d40-abd0-4e61-bdff-1fd83bc0760f',
  date: 'Tue, 29 Dec 2015 11:19:01 GMT',
  connection: 'close' });
 return result; }]];