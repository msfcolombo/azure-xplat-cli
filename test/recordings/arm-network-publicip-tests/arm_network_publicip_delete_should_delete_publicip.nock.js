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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"armpublicip8382\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382\",\r\n  \"etag\": \"W/\\\"66fa66d4-f928-4aee-9c0a-18d121239fae\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\",\r\n    \"tag2\": \"testValue2\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8343b4ff-a00d-4fc2-833a-4a1d788ad082\",\r\n    \"ipAddress\": \"40.112.149.118\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 6,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip\",\r\n      \"fqdn\": \"dnstestpubip.westus.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '763',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"66fa66d4-f928-4aee-9c0a-18d121239fae"',
  'x-ms-request-id': '09008b49-0d7b-4f22-baa1-896ad70380d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14956',
  'x-ms-correlation-request-id': 'c3b0545d-b055-4e58-ac9e-21189eb788c2',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T133242Z:c3b0545d-b055-4e58-ac9e-21189eb788c2',
  date: 'Tue, 29 Dec 2015 13:32:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"armpublicip8382\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382\",\r\n  \"etag\": \"W/\\\"66fa66d4-f928-4aee-9c0a-18d121239fae\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\",\r\n    \"tag2\": \"testValue2\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8343b4ff-a00d-4fc2-833a-4a1d788ad082\",\r\n    \"ipAddress\": \"40.112.149.118\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 6,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip\",\r\n      \"fqdn\": \"dnstestpubip.westus.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '763',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"66fa66d4-f928-4aee-9c0a-18d121239fae"',
  'x-ms-request-id': '09008b49-0d7b-4f22-baa1-896ad70380d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14956',
  'x-ms-correlation-request-id': 'c3b0545d-b055-4e58-ac9e-21189eb788c2',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T133242Z:c3b0545d-b055-4e58-ac9e-21189eb788c2',
  date: 'Tue, 29 Dec 2015 13:32:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/ca868e05-9c33-46d4-99ae-3a4a6aab242f?api-version=2015-06-15',
  'retry-after': '10',
  'x-ms-request-id': 'ca868e05-9c33-46d4-99ae-3a4a6aab242f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/ca868e05-9c33-46d4-99ae-3a4a6aab242f?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1181',
  'x-ms-correlation-request-id': '393e524c-ad1b-4b78-83e7-d3f90c1d9e27',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T133245Z:393e524c-ad1b-4b78-83e7-d3f90c1d9e27',
  date: 'Tue, 29 Dec 2015 13:32:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/ca868e05-9c33-46d4-99ae-3a4a6aab242f?api-version=2015-06-15',
  'retry-after': '10',
  'x-ms-request-id': 'ca868e05-9c33-46d4-99ae-3a4a6aab242f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/ca868e05-9c33-46d4-99ae-3a4a6aab242f?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1181',
  'x-ms-correlation-request-id': '393e524c-ad1b-4b78-83e7-d3f90c1d9e27',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T133245Z:393e524c-ad1b-4b78-83e7-d3f90c1d9e27',
  date: 'Tue, 29 Dec 2015 13:32:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/ca868e05-9c33-46d4-99ae-3a4a6aab242f?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6f75118b-e155-4b9c-8dc3-f73884355b8e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14955',
  'x-ms-correlation-request-id': '3f957f2e-4090-4cdb-9fd7-3f5c589185e0',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T133256Z:3f957f2e-4090-4cdb-9fd7-3f5c589185e0',
  date: 'Tue, 29 Dec 2015 13:32:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/ca868e05-9c33-46d4-99ae-3a4a6aab242f?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6f75118b-e155-4b9c-8dc3-f73884355b8e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14955',
  'x-ms-correlation-request-id': '3f957f2e-4090-4cdb-9fd7-3f5c589185e0',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T133256Z:3f957f2e-4090-4cdb-9fd7-3f5c589185e0',
  date: 'Tue, 29 Dec 2015 13:32:56 GMT',
  connection: 'close' });
 return result; }]];