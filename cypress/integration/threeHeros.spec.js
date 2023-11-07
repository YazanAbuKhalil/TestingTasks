import threeHerosPage from "../Pages/threeHerosPage";

describe("stup API calls", () => {
  it("should load with one entry", () => {
    cy.intercept("**/superheroes.json", { fixture: "heros" }).as("allEntries");
    cy.visit(threeHerosPage.url);
    cy.wait("@allEntries").then((xhr) => cy.log(xhr.response.body));
  });
});
