const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: "j8cpta",
  viewportWidth:800,
  viewportHeight:600,
  chromeWebSecurity: false,
  experimentalStudio: true,
  e2e: {  
    //"specPattern": "**/*.feature",  
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
  },
});


