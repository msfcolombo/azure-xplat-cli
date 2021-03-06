// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-nsg\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg\",\r\n  \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"063d5a18-5c92-47f0-a964-b90920fbd545\",\r\n    \"securityRules\": [\r\n      {\r\n        \"name\": \"test-rule\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule\",\r\n        \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"someshorttext\",\r\n          \"protocol\": \"Tcp\",\r\n          \"sourcePortRange\": \"200\",\r\n          \"destinationPortRange\": \"250\",\r\n          \"sourceAddressPrefix\": \"10.0.0.0/24\",\r\n          \"destinationAddressPrefix\": \"10.0.0.0/12\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 100,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      }\r\n    ],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5859',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0978cecf-01dd-427d-a790-61a3426a11f3"',
  'x-ms-request-id': '1262de8a-8977-4b4c-b7cd-c9046c10b101',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'e8769d04-04a5-4c35-8b41-a85466fad40f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T092315Z:e8769d04-04a5-4c35-8b41-a85466fad40f',
  date: 'Fri, 29 Apr 2016 09:23:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-nsg\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg\",\r\n  \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"063d5a18-5c92-47f0-a964-b90920fbd545\",\r\n    \"securityRules\": [\r\n      {\r\n        \"name\": \"test-rule\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule\",\r\n        \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"someshorttext\",\r\n          \"protocol\": \"Tcp\",\r\n          \"sourcePortRange\": \"200\",\r\n          \"destinationPortRange\": \"250\",\r\n          \"sourceAddressPrefix\": \"10.0.0.0/24\",\r\n          \"destinationAddressPrefix\": \"10.0.0.0/12\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 100,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      }\r\n    ],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5859',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0978cecf-01dd-427d-a790-61a3426a11f3"',
  'x-ms-request-id': '1262de8a-8977-4b4c-b7cd-c9046c10b101',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'e8769d04-04a5-4c35-8b41-a85466fad40f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T092315Z:e8769d04-04a5-4c35-8b41-a85466fad40f',
  date: 'Fri, 29 Apr 2016 09:23:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-rule\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule\",\r\n  \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"description\": \"someshorttext\",\r\n    \"protocol\": \"Tcp\",\r\n    \"sourcePortRange\": \"200\",\r\n    \"destinationPortRange\": \"250\",\r\n    \"sourceAddressPrefix\": \"10.0.0.0/24\",\r\n    \"destinationAddressPrefix\": \"10.0.0.0/12\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 100,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '623',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0978cecf-01dd-427d-a790-61a3426a11f3"',
  'x-ms-request-id': 'b2602c94-b74f-4196-bfa3-1df621ae2f55',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '26298594-6bcc-4fd9-8cf0-2dd76f972e7c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T092316Z:26298594-6bcc-4fd9-8cf0-2dd76f972e7c',
  date: 'Fri, 29 Apr 2016 09:23:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-rule\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule\",\r\n  \"etag\": \"W/\\\"0978cecf-01dd-427d-a790-61a3426a11f3\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"description\": \"someshorttext\",\r\n    \"protocol\": \"Tcp\",\r\n    \"sourcePortRange\": \"200\",\r\n    \"destinationPortRange\": \"250\",\r\n    \"sourceAddressPrefix\": \"10.0.0.0/24\",\r\n    \"destinationAddressPrefix\": \"10.0.0.0/12\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 100,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '623',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0978cecf-01dd-427d-a790-61a3426a11f3"',
  'x-ms-request-id': 'b2602c94-b74f-4196-bfa3-1df621ae2f55',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '26298594-6bcc-4fd9-8cf0-2dd76f972e7c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T092316Z:26298594-6bcc-4fd9-8cf0-2dd76f972e7c',
  date: 'Fri, 29 Apr 2016 09:23:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-rule\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule\",\r\n  \"etag\": \"W/\\\"a31cc458-3f78-4d20-a08a-d5d3d7793cdc\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"description\": \"foobarbaz\",\r\n    \"protocol\": \"Udp\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"300-400\",\r\n    \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Deny\",\r\n    \"priority\": 300,\r\n    \"direction\": \"Outbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '613',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '53108a0d-15ac-436d-bb4b-2af69dc688a5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/53108a0d-15ac-436d-bb4b-2af69dc688a5?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '1238061e-0bc2-4f2f-acae-326577ca4475',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T092317Z:1238061e-0bc2-4f2f-acae-326577ca4475',
  date: 'Fri, 29 Apr 2016 09:23:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-rule\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule\",\r\n  \"etag\": \"W/\\\"a31cc458-3f78-4d20-a08a-d5d3d7793cdc\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"description\": \"foobarbaz\",\r\n    \"protocol\": \"Udp\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"300-400\",\r\n    \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Deny\",\r\n    \"priority\": 300,\r\n    \"direction\": \"Outbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '613',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '53108a0d-15ac-436d-bb4b-2af69dc688a5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/53108a0d-15ac-436d-bb4b-2af69dc688a5?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '1238061e-0bc2-4f2f-acae-326577ca4475',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T092317Z:1238061e-0bc2-4f2f-acae-326577ca4475',
  date: 'Fri, 29 Apr 2016 09:23:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/53108a0d-15ac-436d-bb4b-2af69dc688a5?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd4db7ba6-37b5-4645-a543-4f8377a3eb5c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '89541b60-8862-48d8-a7a9-ce0e59dc9b88',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T092348Z:89541b60-8862-48d8-a7a9-ce0e59dc9b88',
  date: 'Fri, 29 Apr 2016 09:23:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/53108a0d-15ac-436d-bb4b-2af69dc688a5?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd4db7ba6-37b5-4645-a543-4f8377a3eb5c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '89541b60-8862-48d8-a7a9-ce0e59dc9b88',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T092348Z:89541b60-8862-48d8-a7a9-ce0e59dc9b88',
  date: 'Fri, 29 Apr 2016 09:23:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-rule\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule\",\r\n  \"etag\": \"W/\\\"0db2329c-f54a-4115-b098-70f8071c994a\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"description\": \"foobarbaz\",\r\n    \"protocol\": \"Udp\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"300-400\",\r\n    \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Deny\",\r\n    \"priority\": 300,\r\n    \"direction\": \"Outbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '614',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0db2329c-f54a-4115-b098-70f8071c994a"',
  'x-ms-request-id': '023891b4-5f90-4fe4-bd5a-e67a81c566a5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '52fef2c6-7d77-4572-97ff-78ae864a87a7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T092349Z:52fef2c6-7d77-4572-97ff-78ae864a87a7',
  date: 'Fri, 29 Apr 2016 09:23:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-rule\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule\",\r\n  \"etag\": \"W/\\\"0db2329c-f54a-4115-b098-70f8071c994a\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"description\": \"foobarbaz\",\r\n    \"protocol\": \"Udp\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"300-400\",\r\n    \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Deny\",\r\n    \"priority\": 300,\r\n    \"direction\": \"Outbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '614',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0db2329c-f54a-4115-b098-70f8071c994a"',
  'x-ms-request-id': '023891b4-5f90-4fe4-bd5a-e67a81c566a5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '52fef2c6-7d77-4572-97ff-78ae864a87a7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160429T092349Z:52fef2c6-7d77-4572-97ff-78ae864a87a7',
  date: 'Fri, 29 Apr 2016 09:23:48 GMT',
  connection: 'close' });
 return result; }]];