const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  viewportWidth:1500,
  viewportHeight:1000,
  chromeWebSecurity: false,

  e2e: {  
    //"specPattern": "**/*.feature",  
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
  },
});
