// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode1265/tables/table1/columns')
  .reply(200, "[{\"name\":\"id\",\"type\":\"string\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table1\\/columns?columnName=id\\/\",\"indexed\":true,\"zumoIndex\":false},{\"name\":\"__createdAt\",\"type\":\"date\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table1\\/columns?columnName=__createdAt\\/\",\"indexed\":true,\"zumoIndex\":true},{\"name\":\"__updatedAt\",\"type\":\"date\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table1\\/columns?columnName=__updatedAt\\/\",\"indexed\":false,\"zumoIndex\":false},{\"name\":\"__version\",\"type\":\"timestamp (MSSQL)\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table1\\/columns?columnName=__version\\/\",\"indexed\":false,\"zumoIndex\":false}]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1155',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '458b479627b78b85af7d2f1759f8ae7e',
  date: 'Wed, 08 Apr 2015 01:31:46 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode1265/tables/table1')
  .reply(200, "{\"idType\":\"string\",\"hasDeleted\":false,\"metrics\":{\"indexCount\":2,\"recordCount\":-1,\"sizeBytes\":0},\"name\":\"table1\",\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/mobileservices\\/clitestnode1265\\/tables\\/table1\\/\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '300',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'b26ec01a675387a0945b5c269662c59a',
  date: 'Wed, 08 Apr 2015 01:31:46 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode1265/tables/table1/permissions')
  .reply(200, "{\"selflink\":\"https:\\/\\/management.core.windows.net\\/5e7d1bb6-4953-44fe-8a54-43fbdb53b989\\/services\\/mobileservices\\/mobileservices\\/clitestnode1265\\/repository\\/service\\/table\\/table1.json\",\"insert\":\"application\",\"read\":\"application\",\"update\":\"application\",\"delete\":\"application\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '280',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '5b68d052d7228e56b8783d6de18f605a',
  date: 'Wed, 08 Apr 2015 01:31:46 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode1265/tables/table1/scripts')
  .reply(200, "[]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'fb7c420cb23080a2bfc107d4b07fada6',
  date: 'Wed, 08 Apr 2015 01:31:47 GMT' });
 return result; }]];