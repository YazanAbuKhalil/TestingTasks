describe("user journy senario", () => {

  it("test user journy", () => {
    cy.visit("/inventory.html");

    // Add first and second items to the cart
    cy.get(".inventory_item").first().find(".btn_inventory").click();
    cy.get(".inventory_item").last().find(".btn_inventory").click();

    // click on cart button and check the length of the cart
    cy.get(".shopping_cart_link").click();
    cy.get(".shopping_cart_badge").should("have.text", 2);

    // Check that the product added to the cart is the same product selected initially
    cy.get(".cart_list")
      .find(".cart_item")
      .first()
      .find(".inventory_item_name")
      .should("have.text", "Sauce Labs Backpack");

    cy.get(".cart_list")
      .find(".cart_item")
      .last()
      .find(".inventory_item_name")
      .should("have.text", "Test.allTheThings() T-Shirt (Red)");


    // Remove first element form the cart
    cy.get(".cart_item").first().find(".cart_button").click();

    // check the element was removed successfully
    cy.get(".cart_item").should("have.length", 1);

    // make checkout proccess
    cy.get(".checkout_button").click();

    cy.get("#first-name").type("yazan");
    cy.get("#last-name").type("abu khalil");
    cy.get("#postal-code").type("99662");

    cy.get("[value='CONTINUE']").click();
    cy.url().should("contain", "/checkout-step-two.html");

    cy.get(".cart_button").click();
    cy.url().should("contain", "/checkout-complete.html");

    // test the successful message
    cy.get(".complete-header").should("have.text", "THANK YOU FOR YOUR ORDER");
  });
});
