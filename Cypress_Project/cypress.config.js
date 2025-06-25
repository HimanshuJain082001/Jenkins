// const { defineConfig } = require("cypress");
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       allureWriter(on, config);
//       return config;
      
//       // implement node event listeners here
//     },
//   },
//   env:{
//     URL : 'https://www.demoblaze.com/'
//   },
  
// });
const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');
const { allureCypress } = require("allure-cypress/reporter");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      }),
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        clearScreenshots() {
  
          const screenshotsFolder = path.join(config.screenshotsFolder); 
          //acess 

          //exists or not
          if (fs.existsSync(screenshotsFolder)) {
            const files = fs.readdirSync(screenshotsFolder);
            
            // loop
            files.forEach(file => {
              const filePath = path.join(screenshotsFolder, file);
              
              //not present delete it
              if (fs.lstatSync(filePath).isFile()) {
                fs.unlinkSync(filePath);
              }
            });
          }
          
          //completion
          return config;
        }
      });
  }
},
env:{
  URL : 'https://www.demoblaze.com/'
},
});
   