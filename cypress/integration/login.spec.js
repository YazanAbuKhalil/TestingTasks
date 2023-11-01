describe("Login functionality", () => {
  beforeEach(() => {
     cy.viewport("iphone-7")
  })

  const Login = (username, password) => {
    cy.visit("/");

    username && cy.get("#user-name").type(username);
    password && cy.get("#password").type(password);

    cy.get("#login-button").click();
  };

  it("login successfully", () => {
    Login("standard_user", "secret_sauce");

    cy.url().should("contain", "/inventory.html");
  });

  it("Login with invalid credentials", () => {
    Login("invalid_user", "invalid_pass");

    cy.get("[data-test='error']").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Login with a locked user", () => {
    Login("locked_out_user", "secret_sauce");

    cy.get("[data-test='error']").should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

  it("login with empty username", () => {
    Login("", "secret_sauce");

    cy.get("[data-test='error']").should(
      "have.text",
      "Epic sadface: Username is required"
    );
  });

  it("Login with empty password", () => {
    Login("standard_user", "");

    cy.get("[data-test='error']").should(
      "have.text",
      "Epic sadface: Password is required"
    );
  });
});
