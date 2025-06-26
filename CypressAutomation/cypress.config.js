const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');



module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
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
          return null;
        }
      });
      on('task', {
        readExcelFile(filePath) {
          const absolutePath = path.resolve(__dirname, 'cypress/fixtures', filePath);
          const workbook = XLSX.readFile(absolutePath);
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(worksheet);
          return data; 
        }
      }); 
  }
}
});
   

// const path = require('path');
// const XLSX = require('xlsx');

// module.exports = {
//   e2e: {
//     setupNodeEvents(on, config) {
//       on('task', {
//         readExcelFile(filePath) {
//           const absolutePath = path.resolve(__dirname, 'cypress/fixtures', filePath);
//           const workbook = XLSX.readFile(absolutePath);
//           const sheetName = workbook.SheetNames[0];
//           const worksheet = workbook.Sheets[sheetName];
//           const data = XLSX.utils.sheet_to_json(worksheet);
//           return data;
//         }
//       });
//     }
//   }
// };