const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");
const { expect } = require("chai");
let translator = new Translator();

suite("Functional Tests", () => {
  suite("POST request to /api/translate", () => {
    test("1: Translation with text and locale fields", function (done) {
      let text = "Mangoes are my favorite fruit.";
      let locale = "american-to-british";
      let expect = `Mangoes are my <span class="highlight">favourite</span> fruit.`;
      chai
        .request(server)
        .post("/api/translate")
        .send({ text, locale })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.translation, expect);
        });
      done();
    });
    test("2: Translation with text and invalid locale field", function (done) {
      let text = "Mangoes are my favorite fruit.";
      let locale = "invalid";
      let expect = "Invalid value for locale field";
      chai
        .request(server)
        .post("/api/translate")
        .send({ text, locale })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, expect);
        });
      done();
    });
    test("3: Translation with missing text field", function (done) {
      let text = "Mangoes are my favorite fruit.";
      let locale = "american-to-british";
      let expect = `Required field(s) missing`;
      chai
        .request(server)
        .post("/api/translate")
        .send({ locale })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, expect);
        });
      done();
    });
    test("4: Translation with missing locale field", function (done) {
      let text = "Mangoes are my favorite fruit.";
      let locale = "american-to-british";
      let expect = `Required field(s) missing`;
      chai
        .request(server)
        .post("/api/translate")
        .send({ text })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, expect);
        });
      done();
    });
    test("5: Translation with empty text", function (done) {
      let text = "";
      let locale = "american-to-british";
      let expect = `No text to translate`;
      chai
        .request(server)
        .post("/api/translate")
        .send({ text, locale })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, expect);
        });
      done();
    });
    test("6: Translation with text that needs no translation", function (done) {
      let text = "Mangoes are my favorite fruit.";
      let locale = "british-to-american";
      let expect = `Everything looks good to me!`;
      chai
        .request(server)
        .post("/api/translate")
        .send({ text, locale })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.translation, expect);
        });
      done();
    });
  });
});
