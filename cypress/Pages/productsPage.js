class productsPage {
  sortOptions = ".product_sort_container";
  productItems = ".inventory_item";
  addItemBtns = ".inventory_item .btn_inventory";
  cart = ".shopping_cart_link";
  cartCounter = ".shopping_cart_badge";
  url = "/inventory.html";
  item1Title = "Sauce Labs Backpack";
  item2Title = "Test.allTheThings() T-Shirt (Red)";
  
  sortByTypeAndOrder(items, sortBy, order) {
    return sortBy === "name" && order === "az"
      ? [...items].sort()
      : sortBy === "name" && order === "za"
      ? [...items].sort().reverse()
      : sortBy === "price" && order === "hilo"
      ? [...items].sort((a, b) => b - a)
      : sortBy === "price" && order === "lohi"
      ? [...items].sort((a, b) => a - b)
      : null;
  }
  testSortItems(sortBy = "name", order = "az") {
    const items = [];

    cy.get(this.sortOptions).select(order);

    cy.get(this.productItems)
      .find(`${this.productItems}_${sortBy}`)
      .each(($item) =>
        items.push(sortBy === "name" ? $item.text() : +$item.text().slice(1))
      )
      .then(() => this.sortByTypeAndOrder(items, sortBy, order))
      .then((sortedItems) => expect(items).to.deep.eq(sortedItems));
  }
}

module.exports = new productsPage();
