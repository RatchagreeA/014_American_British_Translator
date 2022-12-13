const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
let translator = new Translator();
suite("Unit Tests", () => {
  suite("Translate to British English", () => {
    test("1: Mangoes are my favorite fruit.", function (done) {
      let input = "Mangoes are my favorite fruit.";
      let expect = "Mangoes are my favourite fruit.";
      assert.equal(translator.toBritishEnglish(input)[0], expect);
      done();
    });
    test("2: I ate yogurt for breakfast.", function (done) {
      let input = "I ate yogurt for breakfast.";
      let expect = "I ate yoghurt for breakfast.";
      assert.equal(translator.toBritishEnglish(input)[0], expect);
      done();
    });
    test("3: We had a party at my friend's condo.", function (done) {
      let input = "We had a party at my friend's condo.";
      let expect = "We had a party at my friend's flat.";
      assert.equal(translator.toBritishEnglish(input)[0], expect);
      done();
    });
    test("4: Can you toss this in the trashcan for me?", function (done) {
      let input = "Can you toss this in the trashcan for me?";
      let expect = "Can you toss this in the bin for me?";
      assert.equal(translator.toBritishEnglish(input)[0], expect);
      done();
    });
    test("5: The parking lot was full.", function (done) {
      let input = "The parking lot was full.";
      let expect = "The car park was full.";
      assert.equal(translator.toBritishEnglish(input)[0], expect);
      done();
    });
    test("6: Like a high tech Rube Goldberg machine.", function (done) {
      let input = "Like a high tech Rube Goldberg machine.";
      let expect = "Like a high tech Heath Robinson device.";
      assert.equal(translator.toBritishEnglish(input)[0], expect);
      done();
    });
    test("7: To play hooky means to skip class or work.", function (done) {
      let input = "To play hooky means to skip class or work.";
      let expect = "To bunk off means to skip class or work.";
      assert.equal(translator.toBritishEnglish(input)[0], expect);
      done();
    });
    test("8: No Mr. Bond, I expect you to die.", function (done) {
      let input = "No Mr. Bond, I expect you to die.";
      let expect = "No Mr Bond, I expect you to die.";
      assert.equal(translator.toBritishEnglish(input)[0], expect);
      done();
    });
    test("9: Dr. Grosh will see you now.", function (done) {
      let input = "Dr. Grosh will see you now.";
      let expect = "Dr Grosh will see you now.";
      assert.equal(translator.toBritishEnglish(input)[0], expect);
      done();
    });
    test("10: Lunch is at 12:15 today.", function (done) {
      let input = "Lunch is at 12:15 today.";
      let expect = "Lunch is at 12.15 today.";
      assert.equal(translator.toBritishEnglish(input)[0], expect);
      done();
    });
  });
  suite("Translate to American English", () => {
    test("11: We watched the footie match for a while.", function (done) {
      let input = "We watched the footie match for a while.";
      let expect = "We watched the soccer match for a while.";
      assert.equal(translator.toAmericanEnglish(input)[0], expect);
      done();
    });
    test("12: Paracetamol takes up to an hour to work.", function (done) {
      let input = "Paracetamol takes up to an hour to work.";
      let expect = "Tylenol takes up to an hour to work.";
      assert.equal(translator.toAmericanEnglish(input)[0], expect);
      done();
    });
    test("13: First, caramelise the onions.", function (done) {
      let input = "First, caramelise the onions.";
      let expect = "First, caramelize the onions.";
      assert.equal(translator.toAmericanEnglish(input)[0], expect);
      done();
    });
    test("14: I spent the bank holiday at the funfair.", function (done) {
      let input = "I spent the bank holiday at the funfair.";
      let expect = "I spent the public holiday at the carnival.";
      assert.equal(translator.toAmericanEnglish(input)[0], expect);
      done();
    });
    test("15: I had a bicky then went to the chippy.", function (done) {
      let input = "I had a bicky then went to the chippy.";
      let expect = "I had a cookie then went to the fish-and-chip shop.";
      assert.equal(translator.toAmericanEnglish(input)[0], expect);
      done();
    });
    test("16: I've just got bits and bobs in my bum bag.", function (done) {
      let input = "I've just got bits and bobs in my bum bag.";
      let expect = "I've just got odds and ends in my fanny pack.";
      assert.equal(translator.toAmericanEnglish(input)[0], expect);
      done();
    });
    test("17: The car boot sale at Boxted Airfield was called off.", function (done) {
      let input = "The car boot sale at Boxted Airfield was called off.";
      let expect = "The swap meet at Boxted Airfield was called off.";
      assert.equal(translator.toAmericanEnglish(input)[0], expect);
      done();
    });
    test("18: Have you met Mrs Kalyani?", function (done) {
      let input = "Have you met Mrs Kalyani?";
      let expect = "Have you met Mrs. Kalyani?";
      assert.equal(translator.toAmericanEnglish(input)[0], expect);
      done();
    });
    test("19: Prof Joyner of King's College, London.", function (done) {
      let input = "Prof Joyner of King's College, London.";
      let expect = "Prof. Joyner of King's College, London.";
      assert.equal(translator.toAmericanEnglish(input)[0], expect);
      done();
    });
    test("20: Tea time is usually around 4 or 4.30.", function (done) {
      let input = "Tea time is usually around 4 or 4.30.";
      let expect = "Tea time is usually around 4 or 4:30.";
      assert.equal(translator.toAmericanEnglish(input)[0], expect);
      done();
    });
  });
  suite("Highlight translation", () => {
    test("21: Mangoes are my favorite fruit.", function (done) {
      let input = "Mangoes are my favorite fruit.";
      let expect = `Mangoes are my <span class="highlight">favourite</span> fruit.`;
      assert.equal(translator.toBritishEnglish(input)[1], expect);
      done();
    });
    test("22: I ate yogurt for breakfast.", function (done) {
      let input = "I ate yogurt for breakfast.";
      let expect = `I ate <span class="highlight">yoghurt</span> for breakfast.`;
      assert.equal(translator.toBritishEnglish(input)[1], expect);
      done();
    });
    test("23: We watched the footie match for a while.", function (done) {
      let input = "We watched the footie match for a while.";
      let expect = `We watched the <span class="highlight">soccer</span> match for a while.`;
      assert.equal(translator.toAmericanEnglish(input)[1], expect);
      done();
    });
    test("24: Paracetamol takes up to an hour to work.", function (done) {
      let input = "Paracetamol takes up to an hour to work.";
      let expect = `<span class="highlight">Tylenol</span> takes up to an hour to work.`;
      assert.equal(translator.toAmericanEnglish(input)[1], expect);
      done();
    });
  });
});
