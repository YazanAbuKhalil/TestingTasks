class CryptoPricesPage {
    url = "/digital-assets/crypto-prices"
    taradedAssetsAPIUrl = "/v2/tradedAssets";
    taradedAssetsUrlQueryParameters = "limit=100&pageNum=1&sortBy=marketCap&direction=desc&query=&category=ft&categoryId=";
    taradedAssetsAPIQueryParameters = "limit=100&pageNum=4&sortBy=marketCap&direction=asc&query=&category=ft&categoryId=";
    tradedAssetsAPI = `${this.taradedAssetsAPIUrl}?${this.taradedAssetsUrlQueryParameters}`;
    ratesPerOneHour = "[data-test='row-cell-1H'] span";
    negativeRateColor = "rgb(220, 0, 0)";
    positiveRateColor = "rgb(0, 153, 51)";
    zeroRateColor = "rgb(51, 51, 51)";
}
module.exports = new CryptoPricesPage(); 