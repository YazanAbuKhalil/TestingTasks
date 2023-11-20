class CryptoPricesPage {
  url: string = "/digital-assets/crypto-prices";
  taradedAssetsAPIUrl: string = "/v2/tradedAssets";
  taradedAssetsUrlQueryParameters: string =
    "limit=100&pageNum=1&sortBy=marketCap&direction=desc&query=&category=ft&categoryId=";
  taradedAssetsAPIQueryParameters: string =
    "limit=100&pageNum=4&sortBy=marketCap&direction=asc&query=&category=ft&categoryId=";
  tradedAssetsAPI: string = `${this.taradedAssetsAPIUrl}?${this.taradedAssetsUrlQueryParameters}`;
  ratesPerOneHour: string = "[data-test='row-cell-1H'] span";
  negativeRateColor: string = "rgb(220, 0, 0)";
  positiveRateColor: string = "rgb(0, 153, 51)";
  zeroRateColor: string = "rgb(51, 51, 51)";
}
export = new CryptoPricesPage();
