const expect = require("chai").expect;

const validateId = require("../libs/validateService").id;
const { invalidIds, validIds } = require("./stub");

describe("Id", () => {
  describe("Valid examples", () => {
    validIds.forEach(({ title, id }) => {
      it(title, () => {
        const result = validateId(id);

        expect(result).to.be.true;
      });
    });
  });

  describe("Valid examples", () => {
    invalidIds.forEach(({ title, id }) => {
      it(title, () => {
        const result = validateId(id);

        expect(result).to.be.false;
      });
    });
  });
});
