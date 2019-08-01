const generatePhoneNumber = require("../support/helpers");

describe("Rider Login page through UI: ", () => {
    it("displays referrals after login", () => {
      const phoneNumber = generatePhoneNumber();
      cy.enterPhoneAndVerificationCode(phoneNumber);
      cy.get('[name="phoneCode"]').should("be.visible");
    });
  });