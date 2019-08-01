module.exports = function loginUI(phoneNumber) {
  return (
    cy
      .visit("/login")
      .wait(5000)
      .get('input[type="tel"][name="phone"]')
      .type(phoneNumber)
      .get('button[type="submit"]')
      .click()
  );
}
