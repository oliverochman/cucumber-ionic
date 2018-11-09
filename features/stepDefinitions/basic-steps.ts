let page = require('../page-objects/app.po')
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

const { Given, When, Then } = require('cucumber');

Given('I visit the site', function () {
  return page.navigateTo('http://localhost:8100');
});

Then('I should see the title {string}', function (content) {
  var title = page.getTitle();
  return expect(title).to.eventually.eq(content)
});
