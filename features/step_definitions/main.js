const {Given, When, Then} = require('cucumber');
const main = require('../page_object_model/main');

Given("I navigate to mytoyota page", async function() {
    await testController.navigateTo(main.url());
});


Then("I can see email field", async function() {
  console.log('first then')
    await testController
      .expect(main.email().visible).ok();
});

Then("I can see next button", async function() {
  console.log('second then')
    await testController
      .expect(main.next().visible).ok()
      .expect(main.next().innerText).contains('NEXT')
});

