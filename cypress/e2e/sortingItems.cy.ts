const productsPage = require ("../Pages/productsPage");

describe("sorting functionality test", () => {
  beforeEach(() => cy.visit(productsPage.url));

  it("sort by name ascending", () => {
    productsPage.testSortItems();
  });

  it("sort by name descinding", () => {
    productsPage.testSortItems("name", "za");
  });

  it("sort by price descinding", () => {
    productsPage.testSortItems("price", "hilo");
  });

  it("sort by price ascending", () => {
    productsPage.testSortItems("price", "lohi");
  });
});
