describe("Login functionality", () => {
  const login = (username, password) => {
    cy.visit("/");

    username && cy.get("#user-name").type(username);
    password && cy.get("#password").type(password);

    cy.get("#login-button").click();
  };

  it("login successfully", () => {
    login("standard_user", "secret_sauce");

    cy.url().should("contain", "/inventory.html");
  });

  it("Login with invalid credentials", () => {
    login("invalid_user", "invalid_pass");

    cy.get("[data-test='error']").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Login with a locked user", () => {
    login("locked_out_user", "secret_sauce");

    cy.get("[data-test='error']").should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

  it("login with empty username", () => {
    login("", "secret_sauce");

    cy.get("[data-test='error']").should(
      "have.text",
      "Epic sadface: Username is required"
    );
  });

  it("Login with empty password", () => {
    login("standard_user", "");

    cy.get("[data-test='error']").should(
      "have.text",
      "Epic sadface: Password is required"
    );
  });
});
