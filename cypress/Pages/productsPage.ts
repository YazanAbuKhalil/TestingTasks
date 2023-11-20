class productsPage {
  sortOptions: string = ".product_sort_container";
  productItems: string = ".inventory_item";
  addItemBtns: string = ".inventory_item .btn_inventory";
  cart: string = ".shopping_cart_link";
  cartCounter: string = ".shopping_cart_badge";
  url: string = "/inventory.html";
  item1Title: string = "Sauce Labs Backpack";
  item2Title: string = "Test.allTheThings() T-Shirt (Red)";

  sortByTypeAndOrder(items: any, sortBy: string, order:String): any{
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
  testSortItems(sortBy:string = "name", order:string = "az") {
    const items:any = [];

    cy.get(this.sortOptions).select(order);

    cy.get(this.productItems)
      .find(`${this.productItems}_${sortBy}`)
      .each(($item) =>
        items.push(sortBy === "name" ? $item.text() : +$item.text().slice(1))
      )
      .then(() => this.sortByTypeAndOrder(items, sortBy, order))
      .then((sortedItems: any) => expect(items).to.deep.eq(sortedItems));
  }
}
export = new productsPage();
