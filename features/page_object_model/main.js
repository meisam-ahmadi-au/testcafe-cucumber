const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

module.exports =  {
    url: ()=>("https://www.toyota.com.au/mytoyota/"),
    email: ()=> select('#email'),
    next: ()=> select('.circular-btn'),
};
