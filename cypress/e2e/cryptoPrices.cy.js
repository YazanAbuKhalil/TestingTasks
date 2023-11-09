import cryptoPricesPage from "../Pages/cryptoPricesPage";

describe("Crypto Prices Functionality", () => {
  it("should return percentage change per hour with correct colors", () => {
    cy.intercept(cryptoPricesPage.tradedAssetsAPI, {
      fixture: "currencyData",
    }).as("getCryptoPricesRate");
    cy.visit(cryptoPricesPage.url);
    cy.wait("@getCryptoPricesRate").then(() => {
      cy.get(cryptoPricesPage.ratesPerOneHour).each(($rate) => {
        const rate = parseFloat($rate.text()) / 100;
        if (rate > 0)
          cy.wrap($rate).should("have.css", "color", cryptoPricesPage.positiveRateColor);
        else if (rate < 0)
          cy.wrap($rate).should("have.css", "color", cryptoPricesPage.negativeRateColor);
        else cy.wrap($rate).should("have.css", "color", cryptoPricesPage.zeroRateColor);
      });
    });
  });
});
