const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", //for html reports
  allowCypressEnv: false,
  video: true,

  e2e: {
    setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on);

        // implement node event listeners here
           return config;
    },
  },
});
