const fs = require('fs');
const os = require('os');
const path = require('path');

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

function getRunCommand(executable, input) {
  return `${executable} < ${input}`;
}

function getExecutablePath(fileName) {
  if (os.platform() === 'win32') {
    return `${path.join(__dirname, '..', 'junk', fileName)}.exe`;
  }
  if (os.platform() === 'linux') {
    return `${path.join(__dirname, '..', 'junk', fileName)}`;
  }
}

function getCPPPath(fileName) {
  return `${path.join(__dirname, '..', 'junk', fileName)}.cpp`;
}

function getInputPath(fileName) {
  return `${path.join(__dirname, '..', 'junk', fileName)}-input.txt`;
}

module.exports = {
  saveFile,
  getRunCommand,
  getExecutablePath,
  getCPPPath,
  getInputPath,
};
