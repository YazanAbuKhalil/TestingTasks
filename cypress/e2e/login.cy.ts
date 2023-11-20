const loginPage = require("../Pages/loginPage");

describe("Login Functionality", () => {
  beforeEach(() => cy.visit(loginPage.url));

  const validUser:string = Cypress.env("validUser");
  const invalid_user:string = Cypress.env("invalidUser");
  const lockedUser:string = Cypress.env("lockedUser");
  const validPassword:string = Cypress.env("validPassword");
  const invalidPassword:string = Cypress.env("invalidPassword");

  it("should login successfully", () => {
    loginPage.login(validUser, validPassword);
    cy.url().should("contain", loginPage.productsPageUrl);
  });

  it("should not Login with invalid credentials", () => {
    loginPage.login(invalid_user, invalidPassword);
    cy.get(loginPage.errorMessage).should(
      "have.text",
      loginPage.errorMessageInvalid
    );
  });

  it("should not Login with a locked user", () => {
    loginPage.login(lockedUser, validPassword);
    cy.get(loginPage.errorMessage).should(
      "have.text",
      loginPage.errorMessageLocked
    );
  });

  it("should not login with empty username", () => {
    loginPage.login("", validPassword);
    cy.get(loginPage.errorMessage).should(
      "have.text",
      loginPage.errorMessageEmptyUserName
    );
  });

  it("should not Login with empty password", () => {
    loginPage.login(validUser, "");
    cy.get(loginPage.errorMessage).should(
      "have.text",
      loginPage.errorMessageEmptyPassword
    );
  });
});
