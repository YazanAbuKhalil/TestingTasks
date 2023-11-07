describe("Test Without Using Visit", () => {
  it.only("should containt title", () => {
    cy.request("https://www.lipsum.com").as("homePage");
    cy.get("@homePage").its("body").should("include", "<h1>Lorem Ipsum</h1>");
  });
});
