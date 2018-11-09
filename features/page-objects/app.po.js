const protractor = require('protractor');
const browser = protractor.browser;
const element = protractor.element;
const by = protractor.by;

module.exports = {

  navigateTo: (destination) => {
    return browser.get(destination);
  },

  getTitle: () => {
    return browser.getTitle();
  },

  getPageOneTitleText: () => {
    return element(by.tagName('page-one')).element(by.tagName('ion-title')).getText();
  },

  fillInField: (field, value) => {
    return element(by.name(field))
            .element(by.css('.text-input'))
              .sendKeys(value);
  },

  clickOn: (button) => {
    return element(by.buttonText(button)).click();
  },

  page_header: () => {
    return element(by.css('.title .toolbar-title')).getText();
  }

}
