describe('myController', function () {
  it('the dom initially has a greeting', function () {
    browser.get('http://localhost:8888/#');
    expect(element(by.id('greeting')).getText()).toEqual('Hello, World!');
  });

});