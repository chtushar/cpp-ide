const fs = require('fs');

const saveFile = (file, data) => {
  return new Promise((resolve, reject) => {
    console.log('Generating file...');
    fs.writeFile(file, data, function (err) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(`File generated with name ${file}`);
        resolve([file]);
      }
    });
  });
};

module.exports = { saveFile };
