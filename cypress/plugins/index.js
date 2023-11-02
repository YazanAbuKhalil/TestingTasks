/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const setUserAgentandViewport = (config) => {
  const configOverride = {};
  const viewportType = config.userAgent;

  switch (viewportType) {
    case "mobile":
      configOverride.userAgent =
        "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1";
      configOverride.viewportWidth = 375;
      configOverride.viewportHeight = 667;
      break;

    case "desktop":
      configOverride.userAgent =
        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36";
      configOverride.viewportWidth = 1000;
      configOverride.viewportHeight = 660;
      break;
  }
  return configOverride;
};

module.exports = (on, config) => {
  const configOverride = setUserAgentandViewport(config);
  return { ...config, ...configOverride };
};
