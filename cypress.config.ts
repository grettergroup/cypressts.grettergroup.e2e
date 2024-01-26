import { defineConfig } from "cypress";
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config),);
  return config;
}
export default defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://translate.google.com/?sl=pt&tl=en&text=Parab%C3%A9ns&op=translate',
    watchForFileChanges: false,
    video: false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 15000,
    viewportWidth: 1750,
    viewportHeight: 920,
    experimentalRunAllSpecs: true,
    specPattern: [
      '**/*.feature'
    ],
  }
});
