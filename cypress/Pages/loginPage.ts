class LoginPage {
  // selectors
  userName:string = "[data-test='username']";
  password:string = "[data-test='password']";
  loginBtn:string = "#login-button";
  errorMessage:string = "[data-test='error']";
  productsPageUrl:string = "/inventory.html";
  errorMessageInvalid:string =
    "Epic sadface: Username and password do not match any user in this service";
  errorMessageLocked:string = "Epic sadface: Sorry, this user has been locked out.";
  errorMessageEmptyUserName:string = "Epic sadface: Username is required";
  errorMessageEmptyPassword:string = "Epic sadface: Password is required";
  url = "/";

  login(username:string, password:string) : void {
    username && cy.get(this.userName).type(username);
    password && cy.get(this.password).type(password);
    cy.get(this.loginBtn).click();
  }
}
export = new LoginPage();
