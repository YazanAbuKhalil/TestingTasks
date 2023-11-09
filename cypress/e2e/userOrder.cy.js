import productsPage, { productItems } from "../Pages/productsPage";
import cartPage from "../Pages/cartPage";
import checkoutPage from "../Pages/checkoutYourInformationPage";
import checkoutOverviewPage from "../Pages/checkoutOverviewPage";
import finishPage from "../Pages/finishPage";

describe("User Order", () => {
  const firstName = Cypress.env("firstName");
  const lastName = Cypress.env("lastName");
  const postalCode = Cypress.env("postalCode");

  it("should complete order succussfuly", () => {
    cy.visit(productsPage.url);
    // Add first and second items to the cart
    cy.get(productsPage.addItemBtns).first().click();
    cy.get(productsPage.addItemBtns).last().click();
    // click on cart button and check the length of the cart
    cy.get(productsPage.cart).click();
    cy.get(productsPage.cartCounter).should("have.text", 2);
    // Check that the product added to the cart is the same product selected initially
    cy.get(cartPage.cartList + " " + cartPage.cartItems)
      .first()
      .find(cartPage.itemName)
      .should("have.text", productsPage.item1Title);

    cy.get(cartPage.cartList);
    cy.get(cartPage.cartList + " " + cartPage.cartItems)
      .last()
      .find(cartPage.itemName)
      .should("have.text", productsPage.item2Title);
    // Remove first element form the cart
    cy.get(cartPage.cartItems).first().find(cartPage.removeBtn).click(); 
    // check the element was removed successfully
    cy.get(cartPage.cartItems).should("have.length", 1);
    // make checkout proccess
    cy.get(cartPage.checkoutBtn).click();
    cy.get(checkoutPage.firstNameInput).type(firstName);
    cy.get(checkoutPage.lastNameInput).type(lastName);
    cy.get(checkoutPage.postalCodeInput).type(postalCode);
    cy.get(checkoutPage.continueBtn).click();
    cy.url().should("contain", checkoutOverviewPage.checkoutUrl);
    cy.get(checkoutOverviewPage.finishBtn).click();
    cy.url().should("contain", finishPage.completeOrderUrl);
    // test the successful message
    cy.get(finishPage.completeOrderHeader).should(
      "have.text",
      finishPage.completeOrderHeaderText
    );
  });
});
