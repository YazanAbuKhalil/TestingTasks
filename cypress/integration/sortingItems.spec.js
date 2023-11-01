describe("sorting functionality test", () => {
  beforeEach(() => {
    cy.viewport("iphone-7")
 })
  const IsCorrectSort = (items, correctedSort) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i] !== correctedSort[i]) return false;
    }
    return true;
  };

  const sortByTypeAndOrder = (items, sortBy = "name", order = "az") => {
    return sortBy === "name" && order === "az"
      ? [...items].sort()
      : sortBy === "name" && order === "za"
      ? [...items].sort().reverse()
      : sortBy === "price" && order === "hilo"
      ? [...items].sort((a, b) => b - a)
      : sortBy === "price" && order === "lohi"
      ? [...items].sort((a, b) => a - b)
      : null;
  };

  const testSortItems = (sortBy = "name", order = "az") => {
    const items = [];
    let sortedItems = [];

    cy.visit("/inventory.html");

    cy.get(".product_sort_container").select(`${order}`);

    cy.get(".inventory_item")
      .find(`.inventory_item_${sortBy}`)
      .each(($item) =>
        items.push(sortBy === "name" ? $item.text() : +$item.text().slice(1))
      )
      .then(() => (sortedItems = sortByTypeAndOrder(items, sortBy, order)))
      .then(() =>
        cy.wrap(IsCorrectSort(items, sortedItems)).should("eql", true)
      );
  };

  it("sort by name ascending", () => {
    testSortItems();
  });

  it("sort by name descinding", () => {
    testSortItems("name", "za");
  });

  it("sort by price descinding", () => {
    testSortItems("price", "hilo");
  });

  it("sort by price ascending", () => {
    testSortItems("price", "lohi");
  });
});
