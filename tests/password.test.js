const expect = require("chai").expect;

const validatePassword = require("../libs/validateService").password;
const { validPasswords, invalidPasswords } = require("./stub");

describe("Password", () => {
  describe("Valid examples", () => {
    validPasswords.forEach(({ title, password }) => {
      it(title, () => {
        const result = validatePassword(password);

        expect(result).to.be.undefined;
      });
    });
  });

  describe("Invalid examples", () => {
    invalidPasswords.forEach(({ title, password }) => {
      it(title, () => {
        const result = validatePassword(password);

        expect(result).to.be.an("string");
      });
    });
  });
});
