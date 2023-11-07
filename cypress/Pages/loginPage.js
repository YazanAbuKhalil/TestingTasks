class LoginPage {
  // selectors
  userName = "[data-test='username']";
  password = "[data-test='password']";
  loginBtn = "#login-button";
  errorMessage = "[data-test='error']";
  productsPageUrl = "/inventory.html";
  errorMessageInvalid =
    "Epic sadface: Username and password do not match any user in this service";
  errorMessageLocked = "Epic sadface: Sorry, this user has been locked out.";
  errorMessageEmptyUserName = "Epic sadface: Username is required";
  errorMessageEmptyPassword = "Epic sadface: Password is required";
  url = "/";

  login(username, password) {
    username && cy.get(this.userName).type(username);
    password && cy.get(this.password).type(password);
    cy.get(this.loginBtn).click();
  }
}
module.exports = new LoginPage();
